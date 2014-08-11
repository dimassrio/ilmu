@extends('layout.layout-master')

@section('body')
	<div id="index-content" class="min-height">
		<div class="row">
			<div class="large-4 columns">
				<h4>SIGN <light>IN</light></h4>
				<form action="{{url('login')}}" method="POST">
					<label for="username">USERNAME</label>
					<input type="text" name="username" id="username">
					<label for="password">PASSWORD</label>
					<input type="password" name="password" id="password">

					<input type="submit" class="button right small" value="Login">
					<a href="{{url('register')}}" class="button right small alert">Sign Up</a>
				</form>
			</div>
			<div class="large-6 columns">
				<h1>Learning English is fun,</h1>
				<h4>
					<light>right here, right now, straight from your computer.</light>
				</h4>
			</div>
		</div>
	</div>
@stop