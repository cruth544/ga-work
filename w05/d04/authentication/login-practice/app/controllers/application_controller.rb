class ApplicationController < ActionController::Base
  helper_method :current_user
protected
  def current_user
    @current_user ||= User.find session[:user_id] if session[:user_id]
  end

  def authroize
    unless current_user
      flash[:error] = "you must sign in first to go to that page"
      redirect_to new_session_path
    end
  end
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
end
