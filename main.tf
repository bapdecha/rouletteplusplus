terraform {
  required_providers {
    ovh = {
      source  = "ovh/ovh"
      version = ">= 2.11.0"
    }
  }
}

provider "ovh" {
  endpoint           = "ovh-eu"
  application_key    = var.ovh_app_key
  application_secret = var.ovh_app_secret
  consumer_key       = var.ovh_consumer_key
}

data "ovh_cloud_project_images" "image" {
  service_name = var.ovh_project_id
  region = "GRA11"
  os_type = "linux"
}

data "ovh_cloud_project_flavors" "flavor" {
  service_name = var.ovh_project_id
  region = "GRA11"
  name_filter = "d2-2"
}

resource "ovh_cloud_project_instance" "docker_server" {
  region       = "GRA11"
  service_name = var.ovh_project_id
  name         = "docker-host-ghcr"
  flavor {
    flavor_id  = [for f in data.ovh_cloud_project_flavors.flavor.flavors : f.id if f.name == "d2-2"][0]
  }
  boot_from {
    image_id = [for i in data.ovh_cloud_project_images.image.images : i.id if i.name == "Ubuntu 25.04 - UEFI"][0]
  }
  ssh_key {
    name = "ma cle"
  }
  network {
    public = true
  }
  billing_period = "hourly"
}

output "server_ip" {
  value = ovh_cloud_project_instance.docker_server.addresses
}