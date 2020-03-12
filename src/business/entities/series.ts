import { Episode } from "./episode";

export class Series {
  constructor(
    private id: string,
    private title: string,
    private date: Date,
    private synopsis: string,
    private picture: string,
    private episodes: Episode[]
  ) {}

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getDate(): Date {
    return this.date;
  }

  public setDate(date: Date): void {
    this.date = date;
  }

  public getSynopsis(): string {
    return this.synopsis;
  }

  public setSynopsis(synopsis: string): void {
    this.synopsis = synopsis;
  }

  public getPicture(): string {
    return this.picture;
  }

  public setPicture(picture: string): void {
    this.picture = picture;
  }

  public getEpisodes(): Episode[] {
    return this.episodes;
  }

  public setEpisodes(episodes: Episode[]): void {
    this.episodes = episodes;
  }
}
