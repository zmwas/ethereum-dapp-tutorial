var Rental = artifacts.require("./Rental.sol");
 console.log(Rental);
module.exports = function (deployer) {
  deployer.deploy(Rental)
}