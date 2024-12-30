import { CategoriesCard, PageLayout, SearchCard, SubsribesCard, TagsCard } from "../utils/Route"
import { Card } from "../components/common/Compoent";
import { GoClock } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { TitleDetails2 } from "../components/common/Title";

const titleProps = {
  text: "Blog",
  title1: "",
  title2: "Blog",
  page: false,
};
interface BlogProps {
  title: string
}
interface FigureProps {
  img:string,
  className ?:string,
  style?: React.CSSProperties
}
interface CommentProps{
  className ?:string,
  img:string,
  name : string,
  text:string
}
interface PostPorps {
  title: string,
  gridCol ?: string,
  flexDir ?: string,
  imgSize?: string
  limit?: number; 
  postmeta ? :string
}
interface MeatProps{
  postmeta ? :string
}
export const postData = [
  {
    id: 1,
    image: "/ciyatrip/images/blog/02.jpg",
    text: "We’re National, the sunshine airline. Watch us shine.",
  },
  {
    id: 2,
    image: "/ciyatrip/images/blog/03.jpg",
    text: "You are now free to move about the country",
  },
  {
    id: 3,
    image: "/ciyatrip/images/blog/05.jpg",
    text: "Exclusive holidays for the single traveler.",
  },
]
export const Blog = () => {
  return (
    <PageLayout titleProps={titleProps}>
      <div className="destinations my-20">
        <div className="flex justify-between flex-wrap lg:flex-nowrap gap-5 ">
          <div className="lg:w-2/3 w-full">
            <BlogCont 
              title="We get the job done, on time and ata reasonable cost"
            />
            <Card>
              <Posts 
                title="Related Posts" 
                limit={2}
                flexDir="flex-col"
              />
              <Comments />
              <CommentsForm />
            </Card>
          </div>
          <div className="lg:w-1/3 w-full">
            <SearchCard />
            <Card>
              <Posts title="Recent Posts" 
                gridCol="grid-cols-1"
                postmeta="justDate"
                imgSize="100px"
              />
            </Card>
            <CategoriesCard />
            <SubsribesCard />
            <TagsCard />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export const BlogCont: React.FC<BlogProps> = ({title}) => {
  return(
    <>
      <Card>
        <AniFigure img="/ciyatrip/images/blog/01.jpg" />
        <div className="mt-10">
          <PostMeta />
          <h2 className="my-5 text-2xl font-semibold">{title}</h2>
          <p>Was this just another little prank, courtesy of a mischievous Universe? Or is it possible to get good things coming your way with only mild desire — maybe even a calm indifference? Many inspirational writers, including Napoleon Hill, have assured us that a burning desire is one of the prerequisites of acquiring a fortune.</p>
          <div className="mt-5 bg-[#f3f9ff] px-4 flex gap-6 items-center">
            <ImQuotesLeft className="text-primary" size={160}/>
            <p>Politics can be attributed to his perseverance to overcome his personal liabilities, and his desire to constantly become better. Next time you really want to achieve something, take time to focus on your own personal journal. What is your temptation that is standing in your way to greatness.</p>
          </div>
        </div>
      </Card>
    </>
  )
}

export const AniFigure:React.FC<FigureProps> = ({img, className, style }) =>{
  return <> <figure className="overflow-hidden shrink-0"><img src={img} alt="" className={`hover:scale-110 scale-100 transition duration-[6s] object-cover ${className}`} style={style} /></figure></>
}

export const PostMeta:React.FC<MeatProps> = ({postmeta}) =>{
  return <>
    <div className={`${ postmeta === "justDate" ? "my-1" : "my-4"} flex gap-3 items-center text-gray-500`}>
      <span className="flex gap-2 items-center"><GoClock /><span>Feb 4, 2022 By</span></span>
      {postmeta !== "justDate" && (
        <>
          <span className="flex gap-2 items-center"><img src="/ciyatrip/images/blog/04.jpg" alt="" className="w-[20px] h-[20px] rounded-full" /><span>Sara Lisbon</span></span>
          <span className="flex gap-2 items-center"><FaRegComment /><span>20</span></span>
        </>
      )}
    </div>
  </>
}
export const Posts:React.FC<PostPorps> = ({title,  gridCol = "grid-cols-2", flexDir, imgSize, postmeta, limit}) =>{
  const limitedPostData = limit ? postData.slice(0, limit) : postData;

  return(
    <>
        <TitleDetails2 title={title}/>
        <ul className={`grid ${gridCol} gap-6 my-8 ${postmeta !== "justDate" && "pb-10 border-b-[1px] border-solid border-[#ccc]"}`}>
          { 
            limitedPostData.map((item) => (
            <li key={item.id} className={`flex ${flexDir} gap-4`}>
              <AniFigure img={item.image} className="rounded-lg" style={{ width: imgSize, height: imgSize }}  />
              <div>
                <PostMeta postmeta={postmeta}/>
                <button className={`font-semibold ${ postmeta === "justDate" ? "text-1xl" : "text-2xl"} font-play text-left`}>{item.text}</button>
              </div>
            </li>
            ))
          }
       
        </ul>
    </>
  )
}

export const Comments = () => {
  return(
      <div className="commnets  my-10">
        <div className="flex items-center gap-1">
          <TitleDetails2 title="Comments"/><span className="font-semibold text-xd">(3)</span>
        </div>
        <div>
          <CommentBox img="/ciyatrip/images/avatar/01.jpg" name="John Doe" text="The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan. What steps are required to get you to the goals."/>
          <CommentBox className="pl-10" img="/ciyatrip/images/avatar/02.jpg" name="Paul Flavius" text="Make the plan as detailed as possible. Try to visualize and then plan for, every possible setback. Commit the plan to paper and then keep it with you at all times."/>
          <CommentBox img="/ciyatrip/images/avatar/03.jpg" name="Martin Smith" text="The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan. What steps are required to get you to the goals."/>
        </div>
      </div>
  )
}
export const CommentBox:React.FC<CommentProps> = ({className, img, name, text}) => {
  return(
    <>
      <div className={`flex gap-4 mt-6 ${className}`}>
        <figure className="w-[80px] h-[80px]"><img src={img} className="rounded-lg object-cover"></img></figure>
        <div className="border-[1px] border-solid border-gray-200 p-2 w-full">
          <em className="font-semibold">{name}</em>
          <p className="py-4">{text}</p>
          <button className="underline">Replay</button>
        </div>
      </div>
    </>
  )
}

export const CommentsForm = () =>{
  return(
    <>
       <TitleDetails2 title="Leave a Reply"/>
       <div className="mt-8">
        <p>Your email address will not be published.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4">
          <div>
            <input type ="text" className="w-full p-2 mt-2 border border-slate-300 rounded-md outline-none" placeholder="name" />
          </div>
          <div>
            <input type ="text" className="w-full p-2 mt-2 border border-slate-300 rounded-md outline-none" placeholder="email" />
          </div>
          <div>
            <input type ="text" className="w-full p-2 mt-2 border border-slate-300 rounded-md outline-none" placeholder="Website" />
          </div>
        </div>
        <div className="mt-5">
          <div>
            <textarea rows={5} className="w-full p-2 mt-2 border border-slate-300 rounded-md outline-none" placeholder="Comment" />
          </div>
          <button className="primary-btn mt-4">Post Comment</button>
        </div>
       </div>
    </>
  )
}

