export interface Button {
    btnClass: string;
    title: string;
    onClick: () => void;
}

export interface GitHubAuth {
    clientId: string;
    clientSecret: string;
}