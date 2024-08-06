import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";


interface IParams {
  params: {id: string};
}

export async function generateMetadata({params:{id}} : IParams) {
  // 두 번 호출되는 것 같지만, 아니다. 최신 nextjs에는 cache에 있어서 한 번만 처리한다.
  const movie = await getMovie(id)  
  return {
    title: '123123'
  };
}

export default async function MovieDetail({params: {id}}: IParams ) {
    return (
        <div>
          {/* <h3>Movie detail page</h3> */}
          <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id} />
          </Suspense>
          <Suspense fallback={<h1>Loading movie videos</h1>}>
            <MovieVideos id={id} />
          </Suspense>
        </div>
      );    
  }

