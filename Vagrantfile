Vagrant.configure("2") do |config|

  config.vm.define "mongo" do |app|
    app.vm.provider "docker" do |d|
      d.image = "newcrossfoodcoop/nxfc-mongo"
      d.name = "nxfc_mongo"
      d.ports = ["27017:27017"]
    end
  end

  config.vm.define "web" do |app|
    app.vm.provider "docker" do |d|
      d.build_dir = "."
      d.ports = ["3000:3000","35729:35729", "5858:5858", "2368:2368"]
      d.name = "nxfc_web"
      d.link "nxfc_mongo:nxfc_mongo"
      d.env = {
        NODE_ENV: "development",
        OWNER: "admin",
        MONGO_ADDR_VAR: "NXFC_MONGO_PORT_27017_TCP_ADDR"
      }
      d.volumes = [
        ENV['PWD'] + "/modules:/home/app/modules", 
        ENV['PWD'] + "/uploads:/home/app/uploads"
      ]
    end
  end
end
