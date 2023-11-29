# frozen_string_literal: true

class ApplicationController < ActionController::Base
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
