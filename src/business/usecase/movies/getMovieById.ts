import {MoviesGateway} from '../../gateways/moviesGateway'
import {Movie} from '../../entities/movie'

export class GetMovieByIdUC{
    constructor(private moviesGateway: MoviesGateway ){}

    public async execute(input: GetMovieByIdUCInput): Promise<GetMovieByIdUCOutput>{
        const movie = await this.moviesGateway.getMovieById(input.id)

        if(!movie){
            throw new Error("Movie not found")
        }

        return{
            id: movie.getId(),
            title: movie.getTitle(),
            date: movie.getDate(),
            length: movie.getLength(),
            synopsis: movie.getSynopsis(),
            link: movie.getLink(),
            picture: movie.getPicture()
        }
    }
}

export interface GetMovieByIdUCInput{
    id: string
}

export interface GetMovieByIdUCOutput{
    id: string
    title: string
    date: Date
    length: number
    synopsis: string
    link: string
    picture: string
}