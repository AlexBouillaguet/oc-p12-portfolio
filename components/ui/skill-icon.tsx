import clsx from "clsx"

interface SkillIconProps {
  icon: React.ReactNode
  className?: string
}

export function SkillIcon({ icon, className }: SkillIconProps) {
  return (
    <div
      className={clsx(
        "p-4 border-gray-700 border rounded-xl shadow-sm w-20 h-20 flex items-center justify-center transition-transform duration-300 hover:scale-[1.1] text-foreground",
        className
      )}
    >
      {icon}
    </div>
  )
}
