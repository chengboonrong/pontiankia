import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href={`/${props.link}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default PostLink;