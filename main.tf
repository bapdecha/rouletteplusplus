terraform {
  required_providers {
    ovh = {
      source  = "ovh/ovh"
      version = "~> 0.35"
    }
  }
}

provider "ovh" {
  region             = "GRA7"
  application_key    = var.ovh_app_key
  application_secret = var.ovh_app_secret
  consumer_key       = var.ovh_consumer_key
}

resource "ovh_cloud_project_instance" "docker_server" {
  service_name = var.ovh_project_id
  name         = "docker-host-ghcr"
  flavor_name  = "s1-2" # 2GB RAM, idéal pour débuter
  image_name   = "Ubuntu 22.04"
  key_pair     = "ma-cle-ssh"
}

output "server_ip" {
  value = ovh_cloud_project_instance.docker_server.public_ip
}