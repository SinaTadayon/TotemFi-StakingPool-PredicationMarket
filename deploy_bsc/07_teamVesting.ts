import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts } = hre
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    const TotemToken = await deployments.get("TotemToken")

    await deploy("TeamVesting", {
        from: deployer,
        log: true,
        skipIfAlreadyDeployed: true,
        args: [TotemToken.address],
    })
}

export default func
export const tags = ["TeamVesting"]
export const dependencies = ["Token"]