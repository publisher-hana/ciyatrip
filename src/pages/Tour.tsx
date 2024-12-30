import { PageLayout, Trips } from '../utils/Route'
const titleProps = {
  text: "Tour List",
  title1: "",
  title2: "Tour List",
  page: false,
};
export const Tour = () => {
  return (
    <>
     <PageLayout titleProps={titleProps}>
        <Trips />
      </PageLayout>
    </>
  )
}
