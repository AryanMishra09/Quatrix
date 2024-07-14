import React from 'react'
import Workflow from './workflow'
import { onGetWorkflows } from '../_actions/workflow-connections'
// import MoreCredits from './more-creadits'

type Props = {}

const Workflows = async (props: Props) => {
  const workflows = await onGetWorkflows()
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2">
        {/* <MoreCredits /> */}
        {workflows?.length ? (
          workflows.map((flow) => (
            <Workflow
              key={flow.id}
              {...flow}
            />
          ))
        ) : (
          <div className="mt-28 flex felx-row text-muted-foreground justify-center items-center">
              <p className='text-center'>You haven&apos;t created your first workflow yet?😮 
              <br />
              <br />
              Beleive me...You are missing out on soo much!!!! 
              <br />
              <br />
              <span className='text-purple-400 font-medium'>Do create your first ever Workflow by clicking on the create button above.</span></p> 
          </div>
        )}
      </section>
    </div>
  )
}

export default Workflows