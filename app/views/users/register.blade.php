@extends('layout.layout-master')

@section('body')
	<div id="user-content" class="min-height section">
		<div class="row row-white">
			<div class="large-12 columns">
				<div class="row">
					<div class="large-12 columns">
						<h2>Students Registration</h2>
						<p>Please complete the following fields to register for an account. Required fields are noted by asterisk (*).</p>	
					</div>
				</div>
				<div class="row">
					<div class="large-6 columns">
						<form action="{{url('register')}}" method="POST">
							<div class="row">
								<div class="large-3 small-3 columns">
									<label for="username" class="right inline">Username :</label>
									<label for="password" class="right inline">Password :</label>
									<label for="name" class="right inline">Name :</label>
									<label for="nim" class="right inline">NIM :</label>
									<label for="phone" class="right inline">Phone :</label>
									<label for="email" class="right inline">Email :</label>
								</div>
								<div class="large-9 small-9 columns">
									<input type="text" id="username" name="username">
									<input type="password" id="password" name="password">
									<input type="text" id="name" name="name">
									<input type="text" id="nim" name="nim">
									<input type="text" id="phone" name="phone">
									<input type="text" id="email" name="email">
									<input type="submit" class="button right small">
								</div>
							</div>
						</form>
					</div>
					<div class="large-4 columns">
						<h4>Already Registered?</h4>
						<a href="{{url('/')}}">Sign In.</a>
						<h4>Welcome to Language Laboratory</h4>
						<p>Registering with Language Laboratory gives you access to all of our current and future free courses. Not ready to take a course just yet? Registering puts you on our mailing list - we will update you as courses are added.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
@stop