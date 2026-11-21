'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const FAQ_ITEMS = [
	{
		q: 'How long does it take to build a website?',
		a: 'Most landing pages take about a week. A business website usually takes one to three weeks, depending on the scope and how quickly you send me your content.',
	},
	{
		q: 'Do you work with businesses across Australia?',
		a: 'Yes. I am based in Melbourne and work with clients across Australia by email, phone and video call.',
	},
	{
		q: 'Can you redesign my existing website?',
		a: 'Yes. I can update the design, improve the speed or rebuild the site from scratch, depending on what you have now and what you want.',
	},
	{
		q: 'Does my website come with hosting and a domain?',
		a: 'Hosting and a domain are not included in the website price. They are third-party services that you own directly. I help you choose a provider, set up the domain and deploy the site. If you would rather not deal with it, a Care plan from $59 a month covers hosting, backups and small edits.',
	},
	{
		q: 'Will my website be SEO-friendly?',
		a: 'Yes. Every website includes the technical SEO basics: clean code, page titles and descriptions, fast loading, a mobile-friendly layout and a structure that search engines can read.',
	},
	{
		q: 'Can you add AI features to my website?',
		a: 'Yes. I build AI chatbots, business automations, lead qualification tools and booking assistants, and I can connect them to your website.',
	},
	{
		q: 'What happens after my website is finished?',
		a: 'After launch you get a full handover: your code, your deployment and any accounts created for the project. I show you how to make basic updates yourself, and you can contact me if you need help later.',
	},
	{
		q: 'Do I need to pay everything upfront?',
		a: 'No. For simple projects such as landing pages, you pay before the site goes live, once you are happy with it. Larger projects are split into stages tied to milestones, with the final payment due before launch. I do not ask for large deposits up front.',
	},
	{
		q: 'What if I need changes during or after the project?',
		a: 'Every project includes revision rounds in the price. If you ask for something outside the original scope, such as a new section or an extra feature, I tell you the cost before I do any of that work.',
	},
	{
		q: 'How do we get started?',
		a: 'Use the contact form, or reach me by phone, WhatsApp, SMS or Telegram. We talk through your goals and I recommend a solution.',
	},
	{
		q: 'How much does a website cost?',
		a: 'I give a fixed quote after a free consultation. Most small business websites start from $299 AUD, and you will know the full price before any work begins.',
	},
]

// Built from FAQ_ITEMS so the visible text and the structured data always match.
const FAQ_SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: FAQ_ITEMS.map((item) => ({
		'@type': 'Question',
		name: item.q,
		acceptedAnswer: { '@type': 'Answer', text: item.a },
	})),
}

const MOBILE_VISIBLE = 3

const inputStyle: React.CSSProperties = {
	width: '100%',
	padding: '0.875rem 1rem',
	borderRadius: '0.625rem',
	border: '1.5px solid var(--border-strong)',
	background: 'var(--bg-secondary)',
	color: 'var(--text-primary)',
	fontSize: '0.9375rem',
	outline: 'none',
	transition: 'border-color 0.2s',
	fontFamily: 'inherit',
}

function QuestionModal({ onClose }: { onClose: () => void }) {
	const [form, setForm] = useState({ name: '', email: '', question: '' })
	const [loading, setLoading] = useState(false)
	const [submitted, setSubmitted] = useState(false)
	const [error, setError] = useState(false)
	const overlayRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
		document.addEventListener('keydown', onKey)
		document.body.style.overflow = 'hidden'
		return () => {
			document.removeEventListener('keydown', onKey)
			document.body.style.overflow = ''
		}
	}, [onClose])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
		setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)
		setError(false)
		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/faq-question`,
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(form),
				}
			)
			if (!res.ok) throw new Error('api error')
			setSubmitted(true)
		} catch {
			setError(true)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div
			ref={overlayRef}
			onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
			style={{
				position: 'fixed', inset: 0, zIndex: 200,
				background: 'rgba(0,0,0,0.65)',
				backdropFilter: 'blur(4px)',
				display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
				padding: '1rem',
				paddingTop: '5vh',
				overflowY: 'auto',
			}}
		>
			<motion.div
				initial={{ opacity: 0, scale: 0.95, y: 16 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.95, y: 16 }}
				transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
				style={{
					background: 'var(--bg-card-solid)',
					border: '1px solid var(--border-strong)',
					borderRadius: '1.125rem',
					padding: '2rem',
					width: '100%',
					maxWidth: 480,
					position: 'relative',
					zIndex: 1,
					boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
					marginBottom: '1rem',
				}}
			>
				{/* Close button */}
				<button
					onClick={onClose}
					aria-label='Close modal'
					style={{
						position: 'absolute', top: '1rem', right: '1rem',
						width: 32, height: 32, borderRadius: '50%',
						border: '1px solid var(--border-strong)',
						background: 'var(--bg-secondary)',
						cursor: 'pointer', display: 'flex',
						alignItems: 'center', justifyContent: 'center',
						color: 'var(--text-muted)', transition: 'color 0.2s',
					}}
					onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')}
					onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
				>
					<svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
						<line x1='18' y1='6' x2='6' y2='18'/><line x1='6' y1='6' x2='18' y2='18'/>
					</svg>
				</button>

				<h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
					Send me a question
				</h3>

				{submitted ? (
					<div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
						<div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🎉</div>
						<h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
							Question received!
						</h4>
						<p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
							I&apos;ll get back to you within 24 hours.
						</p>
					</div>
				) : (
					<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
						<div>
							<label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
								Name *
							</label>
							<input
								type='text' name='name' value={form.name} onChange={handleChange}
								required placeholder='Your full name' style={inputStyle}
								onFocus={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)')}
								onBlur={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)')}
							/>
						</div>
						<div>
							<label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
								Email *
							</label>
							<input
								type='email' name='email' value={form.email} onChange={handleChange}
								required placeholder='your@email.com' style={inputStyle}
								onFocus={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)')}
								onBlur={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)')}
							/>
						</div>
						<div>
							<label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
								Your question *
							</label>
							<textarea
								name='question' value={form.question} onChange={handleChange}
								required rows={4} placeholder='What would you like to know?'
								style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
								onFocus={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)')}
								onBlur={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)')}
							/>
						</div>
						{error && (
							<div style={{ padding: '0.75rem 1rem', borderRadius: '0.625rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.35)', color: '#ef4444', fontSize: '0.875rem', lineHeight: 1.5 }}>
								Something went wrong. Please try again or email{' '}
								<a href='mailto:bakhmutvas@gmail.com' style={{ color: '#ef4444', fontWeight: 600 }}>bakhmutvas@gmail.com</a>
							</div>
						)}
						<button
							type='submit' className='btn-primary'
							disabled={loading}
							style={{ justifyContent: 'center', opacity: loading ? 0.75 : 1, marginTop: '0.25rem' }}
						>
							{loading ? 'Sending…' : 'Send Message'}
							{!loading && (
								<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
									<line x1='22' y1='2' x2='11' y2='13'/><polygon points='22 2 15 22 11 13 2 9 22 2'/>
								</svg>
							)}
						</button>
					</form>
				)}
			</motion.div>
		</div>
	)
}

export function FAQ() {
	const [openIdx, setOpenIdx] = useState<number | null>(null)
	const [mobileExpanded, setMobileExpanded] = useState(false)
	const [modalOpen, setModalOpen] = useState(false)

	const toggle = (i: number) => setOpenIdx(prev => (prev === i ? null : i))

	return (
		<section
			id='faq'
			style={{ padding: '4rem 1.5rem', position: 'relative', zIndex: 1 }}
		>
			{/* FAQPage structured data */}
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
			/>

			<div style={{ maxWidth: 780, margin: '0 auto' }}>
				<ScrollReveal>
					<div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
						<p className='section-label' style={{ justifyContent: 'center' }}>
							<span>&#8212;</span> FAQ <span>&#8212;</span>
						</p>
						<h2 className='section-heading'>
							Frequently Asked <span className='gradient-text'>Questions</span>
						</h2>
						<p
							style={{
								color: 'var(--text-secondary)',
								marginTop: '0.75rem',
								fontSize: '0.9375rem',
							}}
						>
							Common questions about pricing, process, and working with me.
						</p>
					</div>
				</ScrollReveal>

				<div
					style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}
				>
					{FAQ_ITEMS.map((item, i) => {
						const isOpen = openIdx === i
						const hiddenOnMobile = !mobileExpanded && i >= MOBILE_VISIBLE
						return (
							<div
								key={i}
								className={hiddenOnMobile ? 'faq-hidden-mobile' : ''}
							>
								<ScrollReveal delay={i * 0.04}>
									<div
										style={{
											background: 'var(--bg-card)',
											backdropFilter: 'blur(16px)',
											WebkitBackdropFilter: 'blur(16px)',
											border: isOpen
												? '1px solid var(--accent)'
												: '1px solid var(--border)',
											borderRadius: '0.875rem',
											overflow: 'hidden',
											transition: 'border-color 0.2s',
											boxShadow: isOpen
												? '0 0 20px var(--accent-glow)'
												: 'var(--shadow-card)',
										}}
									>
										{/* Question button */}
										<button
											onClick={() => toggle(i)}
											aria-expanded={isOpen}
											style={{
												width: '100%',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'space-between',
												gap: '1rem',
												padding: '1.125rem 1.375rem',
												background: 'none',
												border: 'none',
												cursor: 'pointer',
												textAlign: 'left',
											}}
										>
											<span
												style={{
													fontFamily: 'var(--font-display)',
													fontSize: '0.9375rem',
													fontWeight: 700,
													color: isOpen
														? 'var(--accent)'
														: 'var(--text-primary)',
													lineHeight: 1.4,
													transition: 'color 0.2s',
												}}
												dangerouslySetInnerHTML={{ __html: item.q }}
											/>
											<motion.div
												animate={{ rotate: isOpen ? 180 : 0 }}
												transition={{ duration: 0.25 }}
												style={{
													flexShrink: 0,
													color: isOpen ? 'var(--accent)' : 'var(--text-muted)',
												}}
											>
												<svg
													width='18'
													height='18'
													viewBox='0 0 24 24'
													fill='none'
													stroke='currentColor'
													strokeWidth='2.5'
													strokeLinecap='round'
													strokeLinejoin='round'
												>
													<polyline points='6 9 12 15 18 9' />
												</svg>
											</motion.div>
										</button>

										{/* Answer */}
										<AnimatePresence initial={false}>
											{isOpen && (
												<motion.div
													key='answer'
													initial={{ height: 0, opacity: 0 }}
													animate={{ height: 'auto', opacity: 1 }}
													exit={{ height: 0, opacity: 0 }}
													transition={{
														duration: 0.3,
														ease: [0.22, 1, 0.36, 1],
													}}
													style={{ overflow: 'hidden' }}
												>
													<p
														style={{
															margin: 0,
															padding: '0 1.375rem 1.25rem',
															fontSize: '0.875rem',
															color: 'var(--text-secondary)',
															lineHeight: 1.75,
														}}
														dangerouslySetInnerHTML={{ __html: item.a }}
													/>
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								</ScrollReveal>
							</div>
						)
					})}
				</div>

				{/* Mobile: show more/less */}
				<div
					className='faq-toggle-btn'
					style={{ marginTop: '1.25rem', textAlign: 'center' }}
				>
					<button
						onClick={() => setMobileExpanded(v => !v)}
						style={{
							background: 'var(--bg-card)',
							border: '1.5px solid var(--btn-outline-color)',
							borderRadius: '0.625rem',
							padding: '0.625rem 1.5rem',
							fontSize: '0.875rem',
							fontWeight: 600,
							color: 'var(--btn-outline-color)',
							cursor: 'pointer',
							display: 'inline-flex',
							alignItems: 'center',
							gap: '0.4rem',
						}}
					>
						{mobileExpanded
							? 'Show Less'
							: `Show ${FAQ_ITEMS.length - MOBILE_VISIBLE} More Questions`}
						<svg
							width='14'
							height='14'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2.5'
							strokeLinecap='round'
							strokeLinejoin='round'
							style={{
								transform: mobileExpanded ? 'rotate(180deg)' : 'none',
								transition: 'transform 0.25s',
							}}
						>
							<polyline points='6 9 12 15 18 9' />
						</svg>
					</button>
				</div>
			</div>

				{/* Still have questions? */}
				<div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
					<p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '0.875rem' }}>
						Still have questions?
					</p>
					<button
						onClick={() => setModalOpen(true)}
						className='btn-outline'
						style={{ fontSize: '0.875rem' }}
					>
						Ask me directly
						<svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
							<path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'/>
						</svg>
					</button>
				</div>

			<style>{`
        @media (min-width: 601px) {
          .faq-hidden-mobile { display: block !important; }
          .faq-toggle-btn { display: none !important; }
        }
        @media (max-width: 600px) {
          .faq-hidden-mobile { display: none !important; }
        }
      `}</style>

			<AnimatePresence>
				{modalOpen && <QuestionModal onClose={() => setModalOpen(false)} />}
			</AnimatePresence>
		</section>
	)
}
