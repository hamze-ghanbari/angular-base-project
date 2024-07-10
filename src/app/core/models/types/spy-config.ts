
export type KeysSpy = 'ActivatedRoute' | 'MatSnackBar' | 'MatDialog' | 'MatDialogRef' | 'MatBottomSheet' | 'MatBottomSheetRef' |
'Router' | 'MatTable' | 'LocalRepository' | 'HttpClient' | 'localStorage' | 'HttpRequest';

export type SpyConfigType = {
    [key in KeysSpy]: SpyModel
}

export type ReturnConfigType = {
    [key in KeysSpy] : any
}

type SpyModel = {
    methods: string[],
    properties?: any
}
