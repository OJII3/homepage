import { ProductCard } from "@/components/about/ProductCard";
import { SkillCard } from "@/components/about/SkillCard";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import NextLink from "next/link";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="sticky w-11/12 mx-auto top-20">
        <NextLink
          href="/"
          className="flex items-center justify-center w-12 h-12 text-3xl rounded-full transition-all hover:bg-orange-300"
        >
          <div className="self-center text-center">{"<-"}</div>
        </NextLink>
      </div>
      <header className="flex items-center h-64 p-4">
        <h1 className="mx-auto my-8 text-4xl font-bold text-center text-gray-500">
          About Me
        </h1>
      </header>
      <main className="flex flex-col p-8 mx-auto gap-32 max-w-screen-lg">
        <div>
          <h2 className="mx-auto text-2xl font-bold text-gray-500">学歴</h2>
          <ul className="mt-4 text-gray-700">
            <li className="mx-auto text-xl list-disc list-inside marker:text-2xl">
              2022.4: 東京農工大学・機械システム工学科 入学
            </li>
            <li className="mx-auto text-xl list-disc list-inside marker:text-2xl">
              2024.3:
            </li>
            <li className="mx-auto text-xl list-disc list-inside marker:text-2xl">
              2024.4:
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mx-auto text-2xl font-bold text-gray-500">実務経験</h2>
          <ul className="mt-4 text-xl text-gray-700">
            <li className="mx-auto list-disc list-inside marker:text-2xl">
              フロントエンドインターン(2022年12月~)
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mx-auto text-2xl font-bold text-gray-500">
            割とちゃんとした制作物
          </h2>
          <ul className="flex flex-row mt-2 overflow-x-auto text-gray-700 sm: flex-nowrap whitespace-nowrap">
            <li>
              <ProductCard
                name="サークルのホームページ"
                image="/works/mcc-logo.svg"
                liveLink="https://www.tuatmcc.com"
                sourceLink="https://github.com/tuatmcc/homepage2.0"
              >
                <p>
                  所属サークルのホームページを作成しました。 Next.js appDir
                  を使用し、マークダウンのブログシステムを実装しました。
                </p>
                <br />
                <p>
                  <b>Stacks</b>
                </p>
                <p>
                  pnpm, nextjs, typescript, css-modules, storybook, eslint,
                  prettier, stylelint, github actions
                </p>
              </ProductCard>
            </li>
            <li>
              <ProductCard
                name="このポートフォリオ"
                image="/works/nextjs-logo.svg"
                liveLink="/"
                sourceLink="https://github.com/ojii3/ojii3"
              >
                <p>
                  Tailwind CSS を使ってみたり、View Transition API
                  を使ってみたりしました。
                  <br />
                  今後はNext.jsのIntersecting Routes, WebGL,
                  WASMなどを試す予定です。
                </p>
              </ProductCard>
            </li>
            <li>
              <ProductCard name="3D Modeling" image="/works/n3d_front.png">
                <p>Blender(とUnity) を用いて0から制作しました。</p>
                <img src="/works/n3d_front.png" alt="n3d" />
                <p>
                  VRプラットフォームで動きます。今後はこのモデルを用いてフェイストラッキングやゲーム作成を行なう予定です。
                </p>
              </ProductCard>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mx-auto text-2xl font-bold text-gray-500">
            ちょっとした制作物
          </h2>
          <ul className="flex flex-row mt-2 overflow-x-auto text-gray-700 sm: flex-nowrap whitespace-nowrap">
            <li>
              <ProductCard
                name="マークダウン用CLIツール(npm)"
                image="/logo/npm-logo.png"
              >
                ユーザーが設定したremark,
                rehypeプラグインを使用してマークダウンファイルをTypeScriptの型つきメタデータとHTMLに変換した本文のモジュールを生成するシンプルなnpm
                packageを作成・公開しました。
                <br />
                なお、メンテナンスできなくなった他、ほぼ上位互換なライブラリが存在したため、すぐに使わなくなりました。
              </ProductCard>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mx-auto text-2xl font-bold text-gray-500">
            趣味・スキル
          </h2>
          <div className="flex flex-wrap justify-start mt-4 text-gray-700 gap-1">
            <SkillCard name="Neovim" image="/logo/neovim-logo.png" />
            <SkillCard name="Unity" image="/logo/unity-logo.png" />
            <SkillCard name="Blender" image="/logo/blender-logo.png" />
            <SkillCard name="AtCoder" image="/logo/atcoder-logo.png" />
            <SkillCard name="ROS2" image="/logo/ros-logo.png" />
            <SkillCard name="React" image="/logo/react-logo.png" />
            <SkillCard name="TypeScript" image="/logo/typescript-logo.png" />
            <SkillCard name="Ubuntu" image="/logo/ubuntu-logo.png" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
