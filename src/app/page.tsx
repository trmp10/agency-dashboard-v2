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
function IconUser({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 18c0-3.5 3-6 7-6s7 2.5 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
function IconSignOut({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <path d="M7 3H4a1 1 0 00-1 1v12a1 1 0 001 1h3M13 14l4-4-4-4M17 10H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Sidebar ─────────────────────────────────────────── */

function NavBadge({ count }: { count: number }) {
  return (
    <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#f77445] shrink-0">
      <span className="text-[12px] font-semibold text-white leading-none">{count}</span>
    </div>
  );
}

function NavSectionLabel({ label }: { label: string }) {
  return (
    <div className="h-8 flex items-center px-2">
      <span className="text-[12px] font-semibold uppercase tracking-[0.3px] text-[#a3a3a3]">{label}</span>
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
    <div className={`flex items-center h-10 rounded-lg w-full px-2 cursor-pointer gap-0 ${active ? "bg-[#262626]" : "hover:bg-[#262626]/60"}`}>
      {icon && <span className="w-8 h-10 flex items-center justify-center shrink-0 text-[#737373]">{icon}</span>}
      <span className={`text-[14px] tracking-[0.3px] flex-1 ${active ? "font-semibold text-[#f77445]" : "font-medium text-white"}`}>{label}</span>
      {badge !== undefined && <NavBadge count={badge} />}
    </div>
  );
}

function NavNestedItem({ label, badge }: { label: string; badge?: number }) {
  return (
    <div className="flex items-center h-10 rounded-lg w-full cursor-pointer hover:bg-[#262626]/60">
      <span className="w-8 h-10 flex items-center justify-center shrink-0 text-[#737373]">
        <IconChevronDown className="w-4 h-4" />
      </span>
      <span className="text-[14px] font-medium text-white tracking-[0.3px] flex-1">{label}</span>
      {badge !== undefined && <NavBadge count={badge} />}
    </div>
  );
}

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 bottom-0 w-60 bg-[#171717] flex flex-col z-20 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center gap-2 h-[72px] p-4 shrink-0">
        <div className="w-8 h-8 rounded-[4px] bg-[#ff885d] flex items-center justify-center shrink-0">
          <span className="text-[18px] font-bold text-white leading-none">P</span>
        </div>
        <span className="text-[18px] font-semibold text-white flex-1 leading-6 tracking-[0.2px]">Payroll</span>
      </div>

      {/* Nav */}
      <div className="flex flex-col px-3 flex-1 pb-2">
        <NavItem icon={null} label="Dashboard" active />
      </div>

      {/* Version */}
      <div className="flex items-center justify-center h-16 px-4 py-2 shrink-0">
        <span className="text-[12px] font-semibold uppercase tracking-[0.3px] text-[#a3a3a3]">
          Finity Payroll 4.6.424
        </span>
      </div>
    </div>
  );
}

/* ─── Header ──────────────────────────────────────────── */

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

/* ─── KPI Card ────────────────────────────────────────── */

function KpiCard({ label, value, children }: { label: string; value?: string; children?: React.ReactNode }) {
  return (
    <div className="flex-1 bg-white border border-[#e5e5e5] rounded-xl p-4 flex flex-col gap-1 min-w-0">
      <span className="text-[12px] font-semibold uppercase tracking-[0.3px] text-[#737373] leading-4">{label}</span>
      {value && <span className="text-[24px] font-bold text-[#171717] tracking-[0.2px] leading-8">{value}</span>}
      {children}
    </div>
  );
}

function StatusDot({ color }: { color: "amber" | "green" }) {
  return (
    <span className={`w-3 h-3 rounded-full shrink-0 ${color === "amber" ? "bg-[#f59e0b]" : "bg-[#22c55e]"}`} />
  );
}

/* ─── Tag ─────────────────────────────────────────────── */

type TagColor = "red" | "yellow" | "teal";
function Tag({ label, color }: { label: string; color: TagColor }) {
  const styles: Record<TagColor, string> = {
    red: "bg-[#fee2e2] border-[#991b1b] text-[#991b1b]",
    yellow: "bg-[#fef9c3] border-[#854d0e] text-[#854d0e]",
    teal: "bg-[#d9eeec] border-[#274548] text-[#274548]",
  };
  return (
    <div className={`flex items-center justify-center h-6 px-2 rounded-[4px] border text-[14px] font-medium whitespace-nowrap shrink-0 ${styles[color]}`}>
      {label}
    </div>
  );
}

/* ─── Issue Card & Row ────────────────────────────────── */

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

function IssueRow({ label, count, color = "red" }: { label: string; count: string; color?: "red" | "warning" }) {
  const countColor = color === "red" ? "text-[#dc2626]" : "text-[#ca8a04]";
  const hoverBg = color === "red" ? "hover:bg-[#fef2f2]" : "hover:bg-[#fefce8]";
  return (
    <div className={`flex items-center gap-4 h-8 px-1 rounded-lg cursor-pointer transition-colors duration-100 ${hoverBg}`}>
      <span className="flex-1 text-[14px] font-medium text-[#404040] leading-5 tracking-[0.3px]">{label}</span>
      <div className="flex items-center gap-1 shrink-0">
        <span className={`text-[14px] font-medium whitespace-nowrap ${countColor}`}>{count}</span>
        <IconArrowRight className={`w-4 h-4 ${countColor}`} />
      </div>
    </div>
  );
}

/* ─── Section Label ───────────────────────────────────── */

function SectionLabel({ label }: { label: string }) {
  return (
    <span className="text-[12px] font-semibold uppercase tracking-[0.3px] text-[#737373] leading-4">{label}</span>
  );
}

/* ─── Right Sidebar Components ────────────────────────── */

function StatusKpiCard({ label, value, dotColor }: { label: string; value: string; dotColor: "amber" | "green" }) {
  return (
    <div className="flex-1 bg-white border border-[#e5e5e5] rounded-xl p-4 flex flex-col gap-1 min-w-0">
      <span className="text-[12px] font-semibold uppercase tracking-[0.3px] text-[#737373] leading-4">{label}</span>
      <div className="flex items-center gap-2 h-6">
        <StatusDot color={dotColor} />
        <span className="text-[14px] font-medium text-[#171717] tracking-[0.3px] leading-5">{value}</span>
      </div>
    </div>
  );
}

function PayRunStep({ label, sublabel, active, isLast }: { label: string; sublabel?: string; active?: boolean; isLast?: boolean }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex flex-col items-center shrink-0 w-[18px] self-stretch">
        <div className="mt-[3px] shrink-0">
          {active ? (
            <div className="w-[18px] h-[18px] rounded-full border-2 border-[#f77445] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#f77445]" />
            </div>
          ) : (
            <div className="w-[18px] h-[18px] rounded-full border border-[#a3a3a3] bg-white" />
          )}
        </div>
        {!isLast && <div className="w-px bg-[#d4d4d4] flex-1 mt-1" />}
      </div>
      <div className={`flex flex-col min-w-0 ${!isLast ? "pb-4" : ""}`}>
        <span className={`text-[14px] font-medium leading-5 tracking-[0.3px] ${active ? "text-[#171717]" : "text-[#737373]"}`}>{label}</span>
        {sublabel && <span className="text-[14px] font-medium text-[#ca8a04] leading-5 tracking-[0.3px]">{sublabel}</span>}
      </div>
    </div>
  );
}

function ReminderRow({ label, date, checked, onToggle, dateRed }: { label: string; date: string; checked: boolean; onToggle: () => void; dateRed?: boolean }) {
  return (
    <div className="flex items-center gap-2 h-14 px-5 border-b border-[#e5e5e5] hover:bg-[#F5F5F5] transition-colors duration-100 cursor-pointer" onClick={onToggle}>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onToggle(); }}
        className={`w-5 h-5 rounded-full border shrink-0 flex items-center justify-center transition-colors duration-150 ${checked ? "border-[#f77445] bg-[#f77445]" : "border-[#a3a3a3] bg-white"}`}
      >
        {checked && (
          <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
            <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
      <span className={`flex-1 text-[14px] leading-5 tracking-[0.3px] transition-colors duration-150 ${checked ? "line-through text-[#a3a3a3]" : "text-[#171717]"}`}>{label}</span>
      <span className={`text-[14px] font-medium text-right w-[80px] leading-5 whitespace-nowrap ${dateRed ? "text-[#dc2626]" : "text-[#737373]"}`}>{date}</span>
    </div>
  );
}

/* ─── Dashboard ───────────────────────────────────────── */

export default function Dashboard() {
  const [reminders, setReminders] = useState([
    { id: 1, label: "Review FPS", date: "Today", checked: false, dateRed: true },
    { id: 2, label: "Add George as new starter", date: "28/03/26", checked: false, dateRed: false },
    { id: 3, label: "Review pension", date: "28/03/26", checked: false, dateRed: false },
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
              Payroll
            </button>
          </div>

          {/* KPI cards */}
          <div className="flex gap-2 items-stretch">
            <KpiCard label="Active Workers" value="108" />
            <KpiCard label="Starters This Week" value="22" />
            <KpiCard label="Leavers" value="4" />
            <KpiCard label="Paid Workers" value="103" />
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
                  title="Unable to pay workers"
                  tag="11 errors"
                  tagColor="red"
                  description="3 blocking issues must be resolved before payroll can run."
                  noCardHover
                >
                  <div className="flex flex-col gap-0">
                    <IssueRow label="Outstanding timesheets" count="5 workers" color="red" />
                    <IssueRow label="RTI errors" count="3 errors" color="red" />
                    <IssueRow label="Missing or invalid bank details" count="3 workers" color="red" />
                  </div>
                </IssueCard>
              </div>

              {/* Action Required */}
              <div className="flex flex-col gap-2">
                <SectionLabel label="Action Required" />
                <IssueCard
                  severity="yellow"
                  title="Compliance flags"
                  tag="19 flags"
                  tagColor="yellow"
                  description="Compliance issues found. Action required to avoid claims and penalties."
                  noCardHover
                >
                  <div className="flex flex-col gap-0">
                    <IssueRow label="Right to Work expiries" count="8 workers" color="warning" />
                    <IssueRow label="AWR approaching week 12" count="4 workers" color="warning" />
                    <IssueRow label="IR35 status not determined" count="2 placements" color="warning" />
                    <IssueRow label="Holiday pay anomalies" count="1 worker" color="warning" />
                    <IssueRow label="P45s not yet issued" count="4 workers" color="warning" />
                  </div>
                </IssueCard>
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
                  tag="Due in 19 days"
                  tagColor="teal"
                  description="Upload the required evidence for HMRC."
                />
                <IssueCard
                  severity="none"
                  title="HMRC payment"
                  tag="Due in 7 days"
                  tagColor="teal"
                  description="PAYE and NI payment due."
                />
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-4 w-[360px] shrink-0 mt-6">

              {/* FPS / EPS status */}
              <div className="flex gap-2">
                <StatusKpiCard label="FPS Status" value="Pending" dotColor="amber" />
                <StatusKpiCard label="EPS Status" value="Approved" dotColor="green" />
              </div>

              {/* Current pay run */}
              <div className="bg-white border border-[#e5e5e5] rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-5 py-5 border-b border-[#e5e5e5]">
                  <span className="text-[18px] font-semibold text-[#171717] tracking-[0.2px] leading-6">Current pay run</span>
                  <span className="text-[14px] font-medium text-[#404040] tracking-[0.3px]">Tax month 12</span>
                </div>
                <div className="px-5 py-5 flex flex-col">
                  <PayRunStep label="Timesheets" sublabel="103 out of 108" active />
                  <PayRunStep label="Processing" />
                  <PayRunStep label="Awaiting approval" />
                  <PayRunStep label="Review" />
                  <PayRunStep label="Payday (31 March 2026)" isLast />
                  <button disabled className="w-full h-10 rounded-full bg-[#e5e5e5] text-[16px] font-medium text-[#a3a3a3] tracking-[0.35px] cursor-not-allowed mt-8">
                    Run Payroll
                  </button>
                </div>
              </div>

              {/* Reminders */}
              <div className="bg-white border border-[#e5e5e5] rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-5 py-5 border-b border-[#e5e5e5]">
                  <span className="text-[18px] font-semibold text-[#171717] tracking-[0.2px] leading-6">Reminders</span>
                </div>
                {reminders.map((r) => (
                  <ReminderRow
                    key={r.id}
                    label={r.label}
                    date={r.date}
                    checked={r.checked}
                    onToggle={() => toggleReminder(r.id)}
                    dateRed={r.dateRed}
                  />
                ))}
                <div className="px-5 py-5 border-b border-[#e5e5e5]">
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
