"use client"

import { Zoom } from "react-awesome-reveal"
import { Quote } from "@/shared/components/atoms/icons/Quote"

interface FeedbackProps extends React.HTMLAttributes<HTMLDivElement> {
  data: IFeedback
}

export const Feedback: React.FC<FeedbackProps> = ({ data }: FeedbackProps) => {
  return (
    <Zoom className="col-span-1 bg-dark-tertiary/10">
      <div className="col-span-1 relative flex items-start gap-x-4 w-fit rounded-sm px-4 pb-11 lg:p-11 !pt-14">
        <Quote className="-mt-4" />
        <div>
          <p className="text-dark-low mb-2 lg:mb-9">{data.feedback}</p>
          <div className="flex items-center gap-x-4">
            <img
              src={data.avatarUrl}
              alt={`${data.avatarUrl}/png`}
              className="w-[52px] h-[52px] rounded-sm"
            />
            <div className="flex flex-col">
              <h5 className="text-xl">{data.name}</h5>
              <span className="text-dark-low text-xs">{data.label}</span>
            </div>
          </div>
          <span className="block mt-2 lg:mt-0 lg:ml-auto cursor-pointer hover:underline w-fit text-orange-400 border-2 border-orange-400 rounded-sm p-2">
            See LinkedIn
          </span>
        </div>
      </div>
    </Zoom>
  )
}
