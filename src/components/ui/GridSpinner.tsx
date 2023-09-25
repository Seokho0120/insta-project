import dynamic from 'next/dynamic';

const GridLoader = dynamic(
  () => import('react-spinners').then((lib) => lib.GridLoader),
  {
    ssr: false,
  }
);

// client 에서 쓰는 spinner 을 next 가 ssr로 미리 불러와서 생기는 문제 이렇게 dynamic 으로 사용하면 된다.

type Props = {
  color?: string;
};

export default function GridSpinner({ color = 'red' }: Props) {
  return <GridLoader color={color} />;
}
