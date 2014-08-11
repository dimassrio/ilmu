<div class="contain-to-grid">
	<nav class="top-bar" data-topbar>
	<ul class="title-area">
		<li class="name">
			<h1>
				@if(Auth::check())
				<a href="{{url('dashboard')}}"><img src="{{asset('assets/images/header-logo-small.png')}}" alt=""></a>
				@else
				<a href="{{url('/')}}"><img src="{{asset('assets/images/header-logo-small.png')}}" alt=""></a>
				@endif
			</h1>
		</li>
		 <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
		<li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
	</ul>

	<section class="top-bar-section">
		<!-- Right Nav Section -->
		<ul class="right">
			@if(Auth::check())
				<li class="has-dropdown"><a href="#">{{Auth::user()->name}}</a>
					<ul class="dropdown">
						<li><a href="{{url('logout')}}">Logout</a></li>
					</ul>
				</li>
			@else
			<li><a href="{{url('register')}}" class="button">SIGN UP</a></li>
			@endif
		</ul>

		<!-- Left Nav Section -->
		<ul class="left">
			@if(Auth::check())
				<li><a href="{{url('reports')}}">Report</a></li>
			@endif
		</ul>
	</section>
	</nav>
</div>