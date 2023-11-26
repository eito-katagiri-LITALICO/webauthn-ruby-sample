# frozen_string_literal: true

class RegistrationsController < ApplicationController
  before_action :authenticate_user!

  def new
  end

  def create
    unless current_user.webauthn_id
      current_user.update!(webauthn_id: WebAuthn.generate_user_id)
    end

    options = relying_party.options_for_registration(
      user: {
        name: current_user.email,
        id: current_user.webauthn_id
      },
      attestation: "none",
      authenticator_selection: {
        authenticator_attachment: "platform",
        resident_key: "discouraged",
        user_verification: "required"
      }
    )

    session[:creation_registration] = { challenge: options.challenge }

    respond_to do |format|
      format.json { render json: options }
    end
  rescue ActiveRecord::RecordInvalid => e
    respond_to do |format|
      format.json { render json: { errors: [e.message] }, status: :unprocessable_entity }
    end
  end

  private

  def relying_party
    @relying_party ||= begin
                         WebAuthn::RelyingParty.new(
                           origin: ENV['WEBAUTHN_ORIGIN'] || "http://localhost:3000",
                           name: "Acme, Inc."
                         )
                       end
  end
end
