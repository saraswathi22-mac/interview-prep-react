export interface Button {
  btnClass?: string;
  title: string;
  onClick?: () => void;
}

export interface GitHubAuth {
  clientId: string;
  clientSecret: string;
}

export interface ArrayType {
  map: Function;
}

export interface Progress {
  progress: number;
}