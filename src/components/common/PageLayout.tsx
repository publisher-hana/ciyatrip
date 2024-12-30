import { TitleProps, Title } from "./Title";
import TopVisual from "./TopVisual"

interface LayoutProps {
  children: React.ReactNode;
  titleProps: TitleProps;
}
export const PageLayout: React.FC<LayoutProps> = ({ children, titleProps }) => {
  return (
    <>
     <section className="mt-20">
      <TopVisual />
      <div className="containers">
        <div className="heading -mt-72 relative z-20 pb-40">
          <Title {...titleProps} />
        </div>
        { children }
      </div>
     </section>
    </>
  )
}
