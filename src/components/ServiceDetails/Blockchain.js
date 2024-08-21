import React from "react"
import service1 from "../../images/services/bc1.jpg"
import service2 from "../../images/services/bc2.jpg"
import service3 from "../../images/services/bc3.jpg"
import service from "../../images/services/blockchain111.png"
import image from "../../images/blockchain-flow.png"
import ServiceSidebar from "./ServiceSidebar"
import SliderComponent from "./SliderComponent"
import icon1 from "../../images/icons/Dapps.png"
import icon2 from "../../images/icons/smartcontracts.png"
import icon3 from "../../images/icons/carbonmarket.png"
import icon4 from "../../images/icons/nft.png"

const Blockchain = () => {
  const slidesData = [
    {
      content:
        "Specializing in diverse industries, we utilize Ethereum, Polygon POS Chain, and Hyperledger Besu to develop innovative solutions tailored to our clients' needs. Leveraging the strengths of these platforms, we deliver efficient and scalable blockchain solutions.",
      features: ["ETHEREUM", "POLYGON POS CHAIN", "HYPERLEDGER BESU"],
      image: service2,
    },

    {
      content:
        "In our blockchain development process, we employ cutting-edge tools such as Fireblocks, Hardhat, and Truffle Suite. Fireblocks ensures secure storage and transfer of digital assets across multiple blockchain networks. Hardhat and Truffle Suite streamline smart contract development, testing, and deployment, enabling us to deliver robust and reliable blockchain solutions..",
      features: ["FIREBLOCKS", " HARDHAT ", "TRUFFLE"],
      image: service1,
    },
    {
      content:
        "In our blockchain development process, we leverage Web3.js, Metamask, Ether.js, and Solidity in conjunction with ERC standards. Web3.js enables Ethereum interaction, Metamask acts as a blockchain gateway and wallet, Ether.js facilitates Ethereum integration, and Solidity is utilized for smart contract development. These tools collectively enhance our ability to create robust blockchain solutions efficiently.",
      features: [
        "WEB3.JS",
        " METAMASK ",
        "ERC STANDARD",
        "ETHER.JS",
        "SOLIDITY",
      ],
      image: service3,
    },
  ]
  return (
    <>
      <section className="services-details-area ptb-70">
        <div className="container">
          <div className="row justify-content">
            <div className="col-lg-12 col-md-12">
              <div className="row justify-content">
                <div className="col-lg-8 col-md-12">
                  <div className="services-details-image" id ="block-chain">
                    <img src={service} alt="about" />
                  </div>
                  <div className="services-details-desc justify-content">
                    <div>
                      <h2 className="main-banner-image" > Blockchain</h2>

                      <p>
                        At <b className="bold-text-color">AppNetWise</b>, we're
                        dedicated to driving innovation and maximizing the
                        potential of blockchain technology. With a diverse skill
                        set and in-depth knowledge of various blockchain
                        platforms and tools, we deliver tailored solutions to
                        address our clients business needs. Our commitment to
                        excellence ensures that we stay at the forefront of
                        industry trends and advancements. From conceptualization
                        to execution, we work closely with our clients to unlock
                        the full capabilities of distributed ledger technology.
                        Our team of experts is passionate about pushing
                        boundaries and creating tangible value for our clients.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <ServiceSidebar />
                </div>
              </div>
              {/* <blockquote>
                  <p>
                    Being vendor neutral allows us to deliver unparalleled value
                    by utilizing best-in-class products and services tailored to
                    our clients' needs.
                  </p>
                </blockquote> */}
              <div
                className=" services-area bg-f1f8fb"
                style={{
                  padding: "40px",
                  marginTop: "40px",
                  borderRadius: "24px",
                }}
              >
                <h2 className="main-banner-image">
                  Streamlined Blockchain Process
                </h2>

                <p>
                  Blockchain operates through a series of steps, starting with
                  transaction initiation and propagation. Transactions are then
                  validated and verified by network nodes to ensure compliance
                  with protocol rules. Upon validation, transactions are grouped
                  into blocks, each containing metadata and a list of
                  transactions. Nodes collaborate to achieve consensus on the
                  validity of blocks before they are added to the blockchain.
                </p>
                <p>
                  Mining, present in some networks like Bitcoin, involves miners
                  competing to validate transactions and add blocks to the
                  chain. After a certain number of confirmations, blocks achieve
                  finality, becoming irreversible parts of the ledger. This
                  continuous process ensures the integrity and security of the
                  distributed ledger, facilitating trustless transactions.
                </p>
                <img src={image} alt="blockchain" />
              </div>
              <div className="ptb-70">
                <h2 className="main-banner-image">
                  Blockchain Solutions We Specialize In
                </h2>
                <div className="row pt-40">
                  <div
                    className="col-lg-6 col-sm-6"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        <img src={icon1} alt="banner" width="20%" />
                      </div>
                      <h3>Decentralized Applications (DApps)</h3>
                      <p>
                        Our expertise extends to developing decentralized
                        applications (DApps) that leverage the power of
                        blockchain technology. Whether it's creating DApps for{" "}
                        <b className="bold-text-color">
                          finance, supply chain, healthcare, or gaming,
                        </b>{" "}
                        we can help our client to build innovative solutions
                        that drive efficiency and transparency.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-6 col-sm-6"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        <img src={icon2} alt="banner" width="20%" />
                      </div>
                      <h3>Smart Contracts</h3>
                      <p>
                        Smart contracts are self-executing contracts with the
                        terms of the agreement directly written into code. We
                        specialize in designing and deploying smart contracts on
                        various blockchain platforms, including{" "}
                        <b className="bold-text-color">
                          Ethereum and Hyperledger Besu
                        </b>
                        , to automate processes, facilitate trustless
                        transactions, and ensure compliance.
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-6 col-sm-6 offset-lg-0 offset-sm-3"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        <img src={icon3} alt="banner" width="20%" />
                      </div>
                      <h3>Carbon Market Solutions</h3>
                      <p>
                        Addressing environmental concerns, we offer
                        blockchain-based solutions for carbon markets. By
                        leveraging blockchain technology, we enable transparent
                        and traceable transactions within carbon markets,
                        facilitating the trading of carbon credits and promoting
                        sustainable practices
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-sm-6 offset-lg-0 offset-sm-3"
                    style={{ display: "flex" }}
                  >
                    <div className="single-solutions-box single-solutions-box-hover">
                      <div className="icon">
                        <img src={icon4} alt="banner" width="20%" />
                      </div>
                      <h3>Non-Fungible Tokens (NFTs)</h3>
                      <p>
                        NFTs have gained significant traction in the digital
                        art, gaming, and collectibles space. We can assist our
                        client in{" "}
                        <b className="bold-text-color">
                          creating, minting, and trading NFTs
                        </b>{" "}
                        on various blockchain platforms, opening up new avenues
                        for monetization and engagement in the digital economy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="main-banner-image">
                Blockchain Development Tools
              </h2>
              <SliderComponent slidesData={slidesData} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blockchain
