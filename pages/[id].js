import { useRouter } from "next/router";

export default function Random(props) {
  const router = useRouter();

  return <h1>{props.number}</h1>;
}

// * called everytime in dev mode

// *  preview mode ~ dev mode on production => getStaticProps will be called everytime as long as preview mode is enabled
export function getStaticProps(context) {
  console.log(context.preview);
  return {
    revalidate: 60,
    props: { number: Math.random() },
  };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
