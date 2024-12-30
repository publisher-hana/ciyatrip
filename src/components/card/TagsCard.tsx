import { Card } from "../common/Compoent";
import { TitleDetails2 } from "../common/Title";

export const TagsCard = () => {
  const className="m-1 p-2 border border-slate-300"
  return(
    <>
      <Card>
        <TitleDetails2 title="Tags"/>
        <div className="my-4 text-gray-400">
          <button className={className}>Blog</button>
          <button className={className}>Adventure</button>
          <button className={className}>WordPress</button>
          <button className={className}>Blogger</button>
          <button className={className}>Food</button>
          <button className={className}>Tourism</button>
          <button className={className}>Travel</button>
          <button className={className}>Magazine</button>
        </div>
      </Card>
    </>
  )
}
