import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'voicemail',
        loadChildren: () => 
            import('./modules/voicemail/voicemail.module').then((m) => m.VoicemailModule),
    },
    {
        path: 'user',
        loadChildren: () => 
            import('./modules/user/user.module').then((m) => m.UserModule),
    },
    {
        path: 'profile',
        loadChildren: () => 
            import('./modules/profile/profile.module').then((m) => m.ProfileModule),
    },
    {
        path: 'sidenav',
        loadChildren: () => 
            import('./modules/sidenav/sidenav.module').then((m) => m.SidenavModule),
    },
            
];
