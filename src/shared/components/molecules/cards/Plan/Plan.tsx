import { Clock, Triangle } from "@/shared/components/atoms/icons"
import React from "react"

interface PlanProps extends React.HTMLAttributes<HTMLDivElement> {
  data: IPlan
}

export const Plan: React.FC<PlanProps> = ({ data }: PlanProps) => {
  function handleHeight(container?: boolean) {
    if (container) {
      if (data.courses) {
        return "min-h-[630px] max-h-[630px] h-[630px]"
      } else {
        return "min-h-[530px] max-h-[530px] h-[530px]"
      }
    } else {
      if (data.courses) {
        return "min-h-[620px] max-h-[620px] h-[620px]"
      } else {
        return "min-h-[520px] max-h-[520px] h-[520px]"
      }
    }
  }

  return (
    <div className={"relative " + handleHeight(true)}>
      <div
        className={
          "border border-b-[4px] border-r-[4px] shadow-box h-full hover:bg-dark-tertiary/10 transition-all ease-in text-brand-light border-orange-500 rounded-lg w-[90%] md:min-w-[375px] md:max-w-[375px] " +
          handleHeight()
        }
      >
        {data.header && (
          <div className="border-b border-dark-secondary bg-gradient-to-br from-orange-300 to-orange-400 font-medium text-lg text-dark-main py-1 text-center rounded-sm">
            {data.header}
          </div>
        )}
        <div className="px-4 md:px-9 relative pt-14 pb-10 h-full">
          {data.off && (
            <div className="py-2 absolute top-4 -right-[10px] bg-dark-main w-fit px-4 border border-brand-light rounded-sm">
              {data.off} 🔥
              <Triangle className="absolute text-dark-main top-full -right-[1px]" />
            </div>
          )}
          <div>
            <h2 className="mt-4 text-3xl">{data.title}</h2>
            <div>
              {data.courses && (
                <>
                  <span className="text-dark-low block mt-4">
                    Includes {data.courses.length}{" "}
                    {data.courses.length === 1 ? "course" : "courses"}
                  </span>
                  <div className="mt-3 flex flex-col text-sm">
                    {data.courses.map((course, index) => (
                      <span key={index} className="text-dark-low block">
                        • {course}
                      </span>
                    ))}
                  </div>
                </>
              )}
              {data.workload && (
                <span className="text-dark-low mt-3 flex items-center gap-x-1 text-sm">
                  <Clock color="#fb923c" /> {data.workload}
                </span>
              )}
              {data.tag && (
                <span className="block w-fit mt-4 rounded-sm font-medium bg-gradient-to-br from-orange-200 to-orange-400 text-dark-main px-2 py-1">
                  {data.tag}
                </span>
              )}
              <div className="absolute bottom-[70px] inset-x-4 md:inset-x-9">
                <div className="text-dark-low">
                  {data.off && (
                    <div className="text-xs gap-x-1 flex items-center">
                      Standard Plan

                      <p className="line-through">{data.standardPlan}</p>
                    </div>
                  )}
                  <span className="text-xs flex items-center">
                    {data.off && `Eduserve Mate + ${data.off}`} {data.totalPrice}
                  </span>
                  <span className="text-xs flex items-center text-brand-light">
                    In up to 12 interest-free installments
                  </span>
                  <span className="text-brand-light text-4xl mt-1 block">
                    {data.monthlyPrice}
                  </span>
                </div>
                <button className="py-4 font-medium rounded-sm hover:bg-orange-300 hover:text-dark-main transition-all ease-in w-full mt-5 text-orange-300 border border-orange-400">
                  {data.courses ? "Ver carriers" : "View course"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
