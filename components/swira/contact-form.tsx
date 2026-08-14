const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT

export function ContactForm() {
  // TODO(vercel): sustituir Formspree por una Server Action con validación y protección anti-spam al migrar a runtime de Vercel.
  return (
    <form action={formspreeEndpoint} method="POST" className="border border-border bg-paper p-7 md:p-10">
      <h2 className="font-heading text-3xl font-bold">Cuéntanos el reto</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">Nombre<input name="name" required className="border-b border-border bg-transparent px-1 py-3 outline-none focus:border-brand" /></label>
        <label className="grid gap-2 text-sm font-medium">Email<input name="email" type="email" required className="border-b border-border bg-transparent px-1 py-3 outline-none focus:border-brand" /></label>
      </div>
      <label className="mt-6 grid gap-2 text-sm font-medium">¿Qué necesitas?<textarea name="message" required rows={5} className="resize-y border-b border-border bg-transparent px-1 py-3 outline-none focus:border-brand" /></label>
      <button type="submit" disabled={!formspreeEndpoint} className="mt-8 rounded-full bg-brand px-6 py-4 font-medium text-ink disabled:cursor-not-allowed disabled:opacity-45">{formspreeEndpoint ? 'Enviar consulta' : 'Configura NEXT_PUBLIC_FORMSPREE_ENDPOINT'}</button>
    </form>
  )
}
