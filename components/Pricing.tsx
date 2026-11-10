'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function Pricing() {
	return (
		<section
			id='pricing'
			style={{ padding: '2rem 1.5rem', position: 'relative', zIndex: 1 }}
		>
			<div style={{ maxWidth: 1200, margin: '0 auto' }}>
				{/* ── Add-ons & Care ── */}
				<ScrollReveal>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '1rem',
							marginBottom: '1rem',
						}}
					>
						<div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
						<p
							style={{
								fontSize: '0.72rem',
								fontWeight: 700,
								letterSpacing: '0.1em',
								textTransform: 'uppercase',
								color: 'var(--text-muted)',
								whiteSpace: 'nowrap',
							}}
						>
							Add-ons &amp; Care
						</p>
						<div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
					</div>
				</ScrollReveal>

				<div
					className='pricing-addons-grid'
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(3, 1fr)',
						gap: '1rem',
					}}
				>
					{[
						{
							name: 'AI Starter',
							price: 'from $99',
							period: ' AUD',
							note: 'Small AI solutions starting from',
							color: '#8b5cf6',
						},
						{
							name: 'Basic Care',
							price: 'from $29',
							period: '/mo',
							note: 'Hosting, backups, minor edits',
							color: 'var(--accent)',
						},
						{
							name: 'SEO Care',
							price: 'from $199',
							period: '/mo',
							note: 'Weekly SEO reports + optimisation',
							color: '#10b981',
						},
					].map((item, i) => (
						<ScrollReveal key={item.name} delay={i * 0.07}>
							<div
								style={{
									padding: '1.125rem 1.25rem',
									borderRadius: '0.875rem',
									background: 'var(--bg-secondary)',
									border: '1px solid var(--border)',
									display: 'flex',
									alignItems: 'center',
									gap: '1rem',
								}}
							>
								<div style={{ flex: 1 }}>
									<span
										style={{
											fontFamily: 'var(--font-display)',
											fontSize: '0.875rem',
											fontWeight: 700,
											color: 'var(--text-primary)',
										}}
									>
										{item.name}
									</span>
									<p
										style={{
											fontSize: '0.75rem',
											color: 'var(--text-secondary)',
											margin: '0.2rem 0 0',
											lineHeight: 1.4,
										}}
									>
										{item.note}
									</p>
								</div>
								<div style={{ textAlign: 'right', flexShrink: 0 }}>
									<span
										style={{
											fontFamily: 'var(--font-display)',
											fontSize: '1rem',
											fontWeight: 800,
											color: item.color,
										}}
									>
										{item.price}
									</span>
									<span
										style={{
											fontSize: '0.65rem',
											color: 'var(--text-muted)',
											fontWeight: 600,
										}}
									>
										{item.period}
									</span>
								</div>
							</div>
						</ScrollReveal>
					))}
				</div>
			</div>

			<style>{`
        @media (max-width: 860px) {
          .pricing-addons-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 580px) {
          .pricing-addons-grid { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
        }
      `}</style>
		</section>
	)
}
