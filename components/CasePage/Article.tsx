export const Article = (props: ArticleProps) => {
  return (
    <div className="iframely-embed my-3">
      <div
        className="iframely-responsive"
        style={{ height: "140px", paddingBottom: "0px" }}
      >
        <a href={props.href} data-iframely-url={props.iFramelyUrl} />
      </div>
    </div>
  );
};

interface ArticleProps {
  href: string;
  iFramelyUrl: string;
}
