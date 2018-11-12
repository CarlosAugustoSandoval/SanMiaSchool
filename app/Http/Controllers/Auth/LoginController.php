<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
//    protected $redirectTo = '/home';
    protected function authenticated($request, $user)
    {
//        dd($user);
//        $required = [
//            'username', 'phone', 'bio', 'dobday', 'dobmonth', 'dobyear',
//            'firstname', 'lastname', 'topics', 'nationality'
//        ];
//
//        $userAtts = array_filter(array_only($user->toArray(), $required));
//
//        if (count($userAtts) != count($required)) {
//            return redirect('/user-prof');
//        }

//        return redirect('home');
        return $user;
    }
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}
