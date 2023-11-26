# frozen_string_literal: true

class RegistrationsController < ApplicationController
  before_action :authenticate_user!

  def new
  end
end
