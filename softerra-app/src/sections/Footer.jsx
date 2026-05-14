// ---------- Footer ----------
export default function Footer() {
  return (
    <footer className="border-t border-fg/5 bg-surface-2 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-1 font-serif text-2xl">
            <span className="text-fg">Softerra</span>
            <span className="text-[#6B5BFF]">.</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-fg/40">
            A six person Shopify development team based in Islamabad. Top Rated Plus on Upwork with a 99 percent job success score and over 500 completed projects.
          </p>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.2em] text-fg/40">Services</div>
          <ul className="space-y-2 text-sm text-fg/60">
            <li>Custom Themes</li>
            <li>Theme Customization</li>
            <li>Full Stack Engineering</li>
            <li>Klaviyo Flows</li>
            <li>Migrations</li>
          </ul>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.2em] text-fg/40">Connect</div>
          <ul className="space-y-2 text-sm text-fg/60">
            <li>Upwork</li>
            <li>LinkedIn</li>
            <li>Slack</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl items-center justify-between border-t border-fg/5 px-8 pt-8 text-xs text-fg/30">
        <div>© 2026 Softerra. All rights reserved.</div>
        <div>Islamabad · Pakistan</div>
      </div>
    </footer>
  );
}
