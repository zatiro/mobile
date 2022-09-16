export interface GameParams {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game: GameParams;
    }
  }
}
