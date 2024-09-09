import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponent from './common/HeaderComponent';
import WelcomeComponent from './common/WelcomeComponent';
import DailySubmissionsComponent from './dailysubmissions/DailySubmissionsComponent';
import InterviewsComponent from './interviews/InterviewsComponent';

import BenchProfilesComponent from './benchprofiles/BenchProfilesComponent';

import './static/ConsultingFirmApp.css';

export default function ConsultingFirmApp() {
    return (
        <div className="ConsultingFirmApp">
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path='/' element={<WelcomeComponent />} />
                    <Route path='/home' element={<WelcomeComponent />} />
                    <Route path='/benchprofiles' element={
                        <BenchProfilesComponent />
                    } />
                    <Route path='/dailysubmissions' element={
                        <DailySubmissionsComponent />
                    } />
                    <Route path='/interviews' element={
                        <InterviewsComponent />
                    } />
                </Routes>
                {/* <FooterComponent /> */}
            </BrowserRouter>
            {/* <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent />} />
                        <Route path='/login' element={<LoginComponent />} />
                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path='/benchprofiles' element={
                            <AuthenticatedRoute>
                                <BenchProfilesComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path='/dailysubmissions' element={
                            <AuthenticatedRoute>
                                <DailySubmissionsComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path='/interviews' element={
                            <AuthenticatedRoute>
                                <InterviewsComponent />
                            </AuthenticatedRoute>
                        } />

                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>

                        } />
                        <Route path='*' element={<ErrorComponent />}></Route>
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider> */}
        </div>
    )
}
