"use client";
import { useState } from "react";

function IconHome({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <path d="M3 7.5L10 2l7 5.5V17a1 1 0 01-1 1H4a1 1 0 01-1-1V7.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 18v-6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function IconExclamation({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <path d="M10 3v8M10 14.5v1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}
function IconUsers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 17c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 4a3 3 0 010 6M18 17c0-2.5-1.5-4.2-4-4.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconBuilding({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <rect x="3" y="4" width="9" height="13" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="12" y="8" width="5" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 8h3M6 11h3M6 14h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <rect x="2" y="5" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function IconChat({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <path d="M3 4h14a1 1 0 011 1v8a1 1 0 01-1 1H5l-3 2V5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <path d="M10 2l7 3v5c0 4-3.5 7-7 8C6.5 17 3 14 3 10V5l7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function IconDocument({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <path d="M5 3h7l4 4v11a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 3v4h4M7 9h6M7 12h6M7 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconReceipt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <path d="M4 2h12v16l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5L4 18V2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 7h6M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconCard({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <rect x="2" y="5" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 9h16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function IconPension({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconUpload({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <path d="M10 13V4M6 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 14v2a1 1 0 001 1h12a1 1 0 001-1v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconCog({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconCalculator({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <rect x="4" y="2" width="12" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="6" y="4" width="8" height="3" rx="0.5" fill="currentColor" opacity="0.4" />
      <circle cx="7" cy="10" r="1" fill="currentColor" />
      <circle cx="10" cy="10" r="1" fill="currentColor" />
      <circle cx="13" cy="10" r="1" fill="currentColor" />
      <circle cx="7" cy="13" r="1" fill="currentColor" />
      <circle cx="10" cy="13" r="1" fill="currentColor" />
      <circle cx="13" cy="13" r="1" fill="currentColor" />
    </svg>
  );
}
function IconCalendar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <rect x="3" y="4" width="14" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 8h14M7 2v4M13 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconUserPlus({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 17c0-3 2.5-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 8v4M14 10h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconCollapse({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconSignOut({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <path d="M7 3H4a1 1 0 00-1 1v12a1 1 0 001 1h3M13 14l4-4-4-4M17 10H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NavBadge({ count }: { count: number }) {
  return (
    <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#f77445] shrink-0">
      <span className="text-[11px] font-semibold text-white leading-none">{count}</span>
    </div>
  );
}

function NavSectionLabel({ label }: { label: string }) {
  return (
    <div className="px-2 h-8 flex items-center">
      <span className="text-[11px] font-semibold uppercase tracking-[0.3px] text-[#a3a3a3]">{label}</span>
    </div>
  );
}

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
};
function NavItem({ icon, label, active, badge }: NavItemProps) {
  return (
    <div className={`flex items-center h-10 rounded-lg w-full px-2 cursor-pointer ${active ? "bg-[#262626]" : "hover:bg-[#262626]/60"}`}>
      <span className={`text-[13px] tracking-[0.3px] flex-1 ${active ? "font-semibold text-[#f77445]" : "font-medium text-white"}`}>{label}</span>
      {badge !== undefined && <NavBadge count={badge} />}
    </div>
  );
}

function NestedNavItem({ label }: { label: string }) {
  return (
    <div className="flex items-center h-10 rounded-lg w-full cursor-pointer hover:bg-[#262626]/60">
      <span className="w-8 h-10 flex items-center justify-center shrink-0 text-[#737373]">
        <IconChevronDown className="w-4 h-4" />
      </span>
      <span className="text-[13px] font-medium text-white tracking-[0.3px]">{label}</span>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 bottom-0 w-60 bg-[#171717] flex flex-col z-20">
      {/* Sidebar header — 72px, p-4, gap-2 — matches Figma node I136:1403;5903:80045 */}
      <div className="flex items-center gap-2 h-[72px] p-4 shrink-0">
        {/* LogoMark — 32px coral rounded square with "P" */}
        <div className="w-8 h-8 rounded-[4px] bg-[#ff885d] flex items-center justify-center shrink-0">
          <span className="text-[18px] font-bold text-white leading-none">P</span>
        </div>
        {/* "Payroll" — 18px semibold white */}
        <span className="text-[18px] font-semibold text-white flex-1 leading-6 tracking-[0.2px]">Payroll</span>
        {/* Collapse / layout toggle icon */}
        <button className="p-1.5 text-[#737373] hover:text-white shrink-0">
          <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
            <rect x="2" y="3" width="16" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 3v14" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {/* Nav — Dashboard only */}
      <div className="flex flex-col px-3 flex-1">
        <NavItem icon={<IconHome className="w-5 h-5" />} label="Dashboard" active />
      </div>

      {/* Settings — border-t #525252, py-2 px-3 */}
      <div className="border-t border-[#525252] px-3 py-2 shrink-0">
        <NavItem icon={<IconSignOut className="w-5 h-5" />} label="Sign out" />
      </div>

      {/* Version — 64px, centered, uppercase 12px semibold #a3a3a3 */}
      <div className="flex items-center justify-center h-16 px-4 py-2 shrink-0">
        <span className="text-[11px] font-semibold uppercase tracking-[0.3px] text-[#a3a3a3]">
          Finity Payroll 4.6.424
        </span>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="fixed top-0 left-60 right-0 h-16 bg-[#e5e5e5] flex items-center justify-end px-5 z-10">
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-full bg-[#d4d4d4] overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-[#a3a3a3] to-[#737373] rounded-full" />
        </div>
        <div className="w-[72px] h-12 rounded-3xl bg-[#d4d4d4]" />
      </div>
    </div>
  );
}

function KpiCard({ label, value, children }: { label: string; value?: string; children?: React.ReactNode }) {
  return (
    <div className="flex-1 bg-white border border-[#e5e5e5] rounded-xl p-5 flex flex-col gap-0.5 min-w-0">
      <span className="text-[11px] font-semibold uppercase tracking-[0.3px] text-[#737373] leading-4">{label}</span>
      {value && <span className="text-[20px] font-semibold text-[#171717] tracking-[0.2px] leading-7">{value}</span>}
      {children}
    </div>
  );
}

function StatusDot({ color }: { color: "amber" | "green" }) {
  return (
    <span className={`w-3 h-3 rounded-full shrink-0 ${color === "amber" ? "bg-[#f59e0b]" : "bg-[#22c55e]"}`} />
  );
}

type TagColor = "red" | "yellow" | "teal";
function Tag({ label, color }: { label: string; color: TagColor }) {
  const styles: Record<TagColor, string> = {
    red: "bg-[#fee2e2] border-[#991b1b] text-[#991b1b]",
    yellow: "bg-[#fef9c3] border-[#854d0e] text-[#854d0e]",
    teal: "bg-[#d9eeec] border-[#274548] text-[#274548]",
  };
  return (
    <div className={`flex items-center justify-center h-6 px-2 rounded-[4px] border text-[13px] font-medium whitespace-nowrap shrink-0 ${styles[color]}`}>
      {label}
    </div>
  );
}

type IssueSeverity = "red" | "yellow" | "none";
function IssueCard({
  severity,
  title,
  tag,
  tagColor,
  description,
  noCardHover,
  children,
}: {
  severity: IssueSeverity;
  title: string;
  tag?: string;
  tagColor?: TagColor;
  description: string;
  noCardHover?: boolean;
  children?: React.ReactNode;
}) {
  const borderColor = severity === "red" ? "bg-[#dc2626]" : severity === "yellow" ? "bg-[#eab308]" : null;
  return (
    <div className={`bg-white border border-[#d4d4d4] rounded-xl flex overflow-hidden w-full transition-colors duration-150 cursor-pointer${noCardHover ? "" : " hover:bg-[#F5F5F5]"}`}>
      {borderColor && <div className={`w-1.5 shrink-0 ${borderColor}`} />}
      <div className="flex-1 p-5 flex flex-col gap-4 min-w-0">
        <div className="flex flex-col gap-1">
          <div className="flex items-start gap-2 w-full">
            <span className="flex-1 text-[18px] font-semibold text-[#171717] tracking-[0.2px] leading-6">{title}</span>
            {tag && tagColor && <Tag label={tag} color={tagColor} />}
          </div>
          <span className="text-[16px] text-[#404040] leading-[22px] tracking-[0.35px]">{description}</span>
        </div>
        {children}
      </div>
    </div>
  );
}

function IssueRow({ label, count }: { label: string; count: string }) {
  return (
    <div className="flex items-center gap-4 h-8 w-full px-3 -mx-3 rounded-lg hover:bg-[#fef2f2] cursor-pointer transition-colors duration-100 group">
      <span className="flex-1 text-[16px] text-[#404040] leading-[22px] tracking-[0.35px]">{label}</span>
      <div className="flex items-center gap-4 shrink-0">
        <span className="text-[14px] font-medium text-[#dc2626] whitespace-nowrap">{count}</span>
        <span className="text-[14px] font-semibold text-[#dc2626] underline whitespace-nowrap">Fix</span>
      </div>
    </div>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <span className="text-[11px] font-semibold uppercase tracking-[0.3px] text-[#737373] leading-4">{label}</span>
  );
}

function PayRunRow({ label, value, valueColor }: { label: string; value: string; valueColor?: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[14px] text-[#404040] leading-5">{label}</span>
      <span className={`text-[14px] font-medium leading-5 ${valueColor ?? "text-[#171717]"}`}>{value}</span>
    </div>
  );
}

function ReminderRow({ label, date, checked, onToggle }: { label: string; date: string; checked: boolean; onToggle: () => void }) {
  return (
    <div className="flex items-center gap-2 h-14 px-5 border-b border-[#e5e5e5] hover:bg-[#F5F5F5] transition-colors duration-100 cursor-pointer" onClick={onToggle}>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onToggle(); }}
        className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors duration-150 ${checked ? "border-[#f77445] bg-[#f77445]" : "border-[#a3a3a3] bg-white"}`}
      >
        {checked && (
          <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
            <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
      <span className={`flex-1 text-[14px] leading-5 transition-colors duration-150 ${checked ? "line-through text-[#a3a3a3]" : "text-[#171717]"}`}>{label}</span>
      <span className="text-[13px] font-medium text-[#404040] text-right w-16 leading-5 whitespace-nowrap">{date}</span>
    </div>
  );
}

export default function Dashboard() {
  const [reminders, setReminders] = useState([
    { id: 1, label: "Review FPS", date: "Today", checked: false },
    { id: 2, label: "Add George as new starter", date: "28/03/26", checked: false },
    { id: 3, label: "Review pension", date: "28/03/26", checked: false },
  ]);

  const toggleReminder = (id: number) => {
    setReminders((prev) =>
      prev.map((r) => (r.id === id ? { ...r, checked: !r.checked } : r))
    );
  };

  return (
    <div className="h-full bg-[#fafafa]">
      <Sidebar />
      <Header />

      <div className="ml-60 pt-16 min-h-full">
        <div className="px-6 py-6 flex flex-col gap-5">

          {/* Title row */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-[24px] font-bold text-[#171717] tracking-[0.2px] leading-8">
                Friday, 13 March 2026
              </h1>
              <p className="text-[16px] text-[#404040] leading-[22px] tracking-[0.35px]">
                Tax Month 12 (6 Mar – 5 Apr 2026)
              </p>
            </div>
            <button className="flex items-center justify-center h-10 px-4 rounded-full bg-[#f77445] text-white text-[16px] font-medium tracking-[0.35px] whitespace-nowrap shrink-0 hover:bg-[#f44c1b] transition-colors duration-150">
              Submit Payroll
            </button>
          </div>

          {/* KPI cards — above the alert */}
          <div className="flex gap-2 items-stretch">
            <KpiCard label="Total Workers" value="13,197" />
            <KpiCard label="Starters This Week" value="22" />
            <KpiCard label="Workers Paid" value="5" />
            <KpiCard label="FPS Status">
              <div className="flex items-center gap-2 h-7 mt-0.5">
                <StatusDot color="amber" />
                <span className="text-[16px] font-semibold text-[#171717] tracking-[0.35px] leading-[22px]">Pending</span>
              </div>
            </KpiCard>
            <KpiCard label="EPS Status">
              <div className="flex items-center gap-2 h-7 mt-0.5">
                <StatusDot color="green" />
                <span className="text-[16px] font-semibold text-[#171717] tracking-[0.35px] leading-[22px]">Submitted</span>
              </div>
            </KpiCard>
          </div>

          {/* Alert banner — grey bg, semibold, 54px, specs from Figma node 136:1404 */}
          <div className="bg-[#f5f5f5] rounded-xl flex items-start gap-2 pl-4 pr-5 py-4 min-h-[54px]">
            <svg className="w-5 h-5 shrink-0 text-[#dc2626] mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <circle cx="10" cy="10" r="9" />
              <path d="M10 6v4.5" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
              <circle cx="10" cy="14" r="0.9" fill="white" />
            </svg>
            <span className="text-[16px] font-semibold text-[#171717] tracking-[0.35px] leading-[22px]">
              3 blocking issues need resolving before payroll can run.
            </span>
          </div>

          {/* Two-column layout */}
          <div className="flex gap-4 items-start">

            {/* Left column */}
            <div className="flex flex-col gap-5 flex-1 min-w-0">

              {/* Critical */}
              <div className="flex flex-col gap-2">
                <SectionLabel label="Critical" />
                <IssueCard
                  severity="red"
                  title="Unable to pay"
                  tag="11 errors"
                  tagColor="red"
                  description="Workers cannot be paid this run. Resolve each issue below."
                  noCardHover
                >
                  <div className="flex flex-col gap-0">
                    <IssueRow label="Missing timesheets" count="5 workers" />
                    <IssueRow label="RTI errors" count="3 errors" />
                    <IssueRow label="Missing or invalid bank details" count="3 workers" />
                  </div>
                </IssueCard>
              </div>

              {/* Action Required */}
              <div className="flex flex-col gap-2">
                <SectionLabel label="Action Required" />
                <IssueCard
                  severity="yellow"
                  title="Compliance flags"
                  tag="15 flags"
                  tagColor="yellow"
                  description="Right to Work, AWR, IR35, Holiday pay."
                />
                <IssueCard
                  severity="yellow"
                  title="Contracts unsigned"
                  tag="5 workers"
                  tagColor="yellow"
                  description="Workers placed without a signed contract on file."
                />
                <IssueCard
                  severity="yellow"
                  title="Pending approval"
                  tag="6 workers"
                  tagColor="yellow"
                  description="Workers awaiting review before system registration."
                />
              </div>

              {/* Admin Compliance */}
              <div className="flex flex-col gap-2">
                <SectionLabel label="Admin Compliance" />
                <IssueCard
                  severity="none"
                  title="JSL submissions"
                  tag="Pending"
                  tagColor="teal"
                  description="Evidence uploads required for HMRC, due end of month."
                />
                <IssueCard
                  severity="none"
                  title="HMRC payment"
                  tag="Pending"
                  tagColor="teal"
                  description="Due every 20th of each month."
                />
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-4 w-[340px] shrink-0 pt-6">

              {/* Current pay run */}
              <div className="bg-white border border-[#e5e5e5] rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e5e5]">
                  <span className="text-[15px] font-semibold text-[#171717] tracking-[0.2px]">Current pay run</span>
                  <span className="text-[13px] font-medium text-[#737373]">Tax month 12</span>
                </div>
                {/* Next pay date highlight */}
                <div className="flex items-center justify-between px-5 py-3 bg-[#f0fdf4] border-b border-[#e5e5e5]">
                  <span className="text-[13px] font-medium text-[#404040]">Next pay date</span>
                  <span className="text-[13px] font-semibold text-[#171717]">14 March 2026</span>
                </div>
                {/* Stats */}
                <div className="px-5 py-4 flex flex-col gap-2.5 border-b border-[#e5e5e5]">
                  <PayRunRow label="Workers in run" value="45" />
                  <PayRunRow label="Excluded" value="11 workers" valueColor="text-[#dc2626]" />
                  <PayRunRow label="Timesheets" value="51 / 56" valueColor="text-[#eab308]" />
                </div>
                {/* Financials */}
                <div className="px-5 py-4 flex flex-col gap-2.5">
                  <PayRunRow label="Gross pay" value="£187,240" />
                  <PayRunRow label="Net pay" value="£141,450" />
                  <PayRunRow label="HMRC liability" value="£61,710" />
                  <PayRunRow label="Total pension" value="£9,840" />
                </div>
              </div>

              {/* Last pay run */}
              <div className="bg-white border border-[#e5e5e5] rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e5e5]">
                  <span className="text-[15px] font-semibold text-[#171717] tracking-[0.2px]">Last pay run</span>
                  <span className="text-[13px] font-medium text-[#737373]">7 March 2026</span>
                </div>
                <div className="px-5 py-4 flex flex-col gap-2.5">
                  <PayRunRow label="Workers paid" value="56" />
                  <PayRunRow label="Gross pay" value="£183,040" />
                  <PayRunRow label="Net pay" value="£138,350" />
                </div>
              </div>

              {/* Reminders */}
              <div className="bg-white border border-[#e5e5e5] rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e5e5]">
                  <span className="text-[15px] font-semibold text-[#171717] tracking-[0.2px]">Reminders</span>
                </div>
                {reminders.map((r) => (
                  <ReminderRow
                    key={r.id}
                    label={r.label}
                    date={r.date}
                    checked={r.checked}
                    onToggle={() => toggleReminder(r.id)}
                  />
                ))}
                <div className="px-5 py-4">
                  <button className="w-full h-10 rounded-full border border-[#a3a3a3] bg-white text-[16px] font-medium text-[#171717] tracking-[0.35px] hover:bg-[#F5F5F5] hover:border-[#737373] transition-colors duration-150">
                    Add reminder
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
