import { NextPage } from "next";
import Link from "next/link";

type IndexPageProps = {};

const IndexPage: NextPage<IndexPageProps> = () => {
  return (
    <div>
      <h1>Index</h1>

      <ul>
        <li>
          <Link href="/todos">Todo 一覧</Link>
        </li>
      </ul>
    </div>
  );
};

export default IndexPage;
