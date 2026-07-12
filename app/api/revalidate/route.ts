import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-revalidation-secret");

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { type, slug } = body;

  try {
    if (type === "blog") {
      revalidatePath("/");
      revalidatePath("/blog");
      if (slug) revalidatePath(`/blog/${slug}`);
      revalidateTag("blogs", { expire: 0 });
      if (slug) revalidateTag(`blog-${slug}`, { expire: 0 });
    }

    if (type === "project") {
      revalidatePath("/");
      revalidateTag("projects", { expire: 0 });
    }

    if (type === "all") {
      revalidatePath("/");
      revalidatePath("/blog");
      revalidateTag("blogs", { expire: 0 });
      revalidateTag("projects", { expire: 0 });
    }

    return NextResponse.json({ revalidated: true, type });
  } catch {
    return NextResponse.json({ error: "Revalidation failed" }, { status: 500 });
  }
}
