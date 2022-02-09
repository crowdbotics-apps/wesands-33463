import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_904_896}>
        <View style={styles.View_I904_896_547_576} />
        <View style={styles.View_I904_896_706_538}>
          <View style={styles.View_I904_896_705_523}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebe5/50b3/737ca801c372abb65df39f4656ea7d16"
              }}
              style={styles.ImageBackground_I904_896_705_524}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cac5/e1c8/0e2023540af6b642a72130a72ad7f390"
              }}
              style={styles.ImageBackground_I904_896_705_526}
            />
            <View style={styles.View_I904_896_705_528}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9558/7ae8/c4b1283bce91da3ad98df5b80c544b32"
                }}
                style={styles.ImageBackground_I904_896_705_529}
              />
            </View>
            <View style={styles.View_I904_896_705_533}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82d2/7396/8c97eec650ab4b62f068e93ffc464ade"
                }}
                style={styles.ImageBackground_I904_896_705_534}
              />
            </View>
          </View>
          <View style={styles.View_I904_896_705_522}>
            <Text style={styles.Text_I904_896_705_522}>
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </Text>
          </View>
          <View style={styles.View_I904_896_706_577}>
            <Text style={styles.Text_I904_896_706_577}>
              We are always open to discuss your project and improve your online
              presence.
            </Text>
          </View>
          <View style={styles.View_I904_896_705_521}>
            <Text style={styles.Text_I904_896_705_521}>Lets Talk!</Text>
          </View>
        </View>
        <View style={styles.View_I904_896_706_539}>
          <View style={styles.View_I904_896_547_578} />
          <View style={styles.View_I904_896_547_604}>
            <Text style={styles.Text_I904_896_547_604}>
              Copyright 2021, Finsweet.com
            </Text>
          </View>
          <View style={styles.View_I904_896_547_583}>
            <Text style={styles.Text_I904_896_547_583}>Home</Text>
          </View>
          <View style={styles.View_I904_896_547_584}>
            <Text style={styles.Text_I904_896_547_584}>About us</Text>
          </View>
          <View style={styles.View_I904_896_547_585}>
            <Text style={styles.Text_I904_896_547_585}>Features</Text>
          </View>
          <View style={styles.View_I904_896_547_586}>
            <Text style={styles.Text_I904_896_547_586}>Pricing</Text>
          </View>
          <View style={styles.View_I904_896_547_587}>
            <Text style={styles.Text_I904_896_547_587}>FAQ</Text>
          </View>
          <View style={styles.View_I904_896_547_588}>
            <Text style={styles.Text_I904_896_547_588}>Blog</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9655/ba54/1eb775c43a1d382ac9df2f3a1db77a74"
          }}
          style={styles.ImageBackground_I904_896_547_589}
        />
        <View style={styles.View_I904_896_778_990}>
          <View style={styles.View_I904_896_706_578} />
          <View style={styles.View_I904_896_706_579}>
            <View style={styles.View_I904_896_706_581}>
              <Text style={styles.Text_I904_896_706_581}>
                contact@website.com
              </Text>
            </View>
            <View style={styles.View_I904_896_706_582}>
              <Text style={styles.Text_I904_896_706_582}>Email me at</Text>
            </View>
            <View style={styles.View_I904_896_706_584}>
              <Text style={styles.Text_I904_896_706_584}>0927 6277 28525</Text>
            </View>
            <View style={styles.View_I904_896_706_585}>
              <Text style={styles.Text_I904_896_706_585}>Call us</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_239_64}>
        <View style={styles.View_103_95}>
          <Text style={styles.Text_103_95}>Lorem ipsum dolor.</Text>
        </View>
        <View style={styles.View_1121_535}>
          <Text style={styles.Text_1121_535}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
        <View style={styles.View_1121_533}>
          <Text style={styles.Text_1121_533}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </Text>
        </View>
        <View style={styles.View_1121_536}>
          <Text style={styles.Text_1121_536}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident. Dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris.
          </Text>
        </View>
        <View style={styles.View_1121_572}>
          <Text style={styles.Text_1121_572}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </Text>
        </View>
        <View style={styles.View_1121_562}>
          <View style={styles.View_1121_563}>
            <View style={styles.View_1121_564}>
              <Text style={styles.Text_1121_564}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c71e/8ee1/f575e2ba6ba6b315018f1dcf6b79246b"
              }}
              style={styles.ImageBackground_1121_565}
            />
          </View>
          <View style={styles.View_1121_566}>
            <View style={styles.View_1121_567}>
              <Text style={styles.Text_1121_567}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c71e/8ee1/f575e2ba6ba6b315018f1dcf6b79246b"
              }}
              style={styles.ImageBackground_1121_568}
            />
          </View>
          <View style={styles.View_1121_569}>
            <View style={styles.View_1121_570}>
              <Text style={styles.Text_1121_570}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c71e/8ee1/f575e2ba6ba6b315018f1dcf6b79246b"
              }}
              style={styles.ImageBackground_1121_571}
            />
          </View>
        </View>
        <View style={styles.View_1121_534}>
          <Text style={styles.Text_1121_534}>
            Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </View>
      <View style={styles.View_175_164}>
        <View style={styles.View_175_165}>
          <Text style={styles.Text_175_165}>Privacy Policy</Text>
        </View>
        <View style={styles.View_175_166}>
          <Text style={styles.Text_175_166}>
            When you’re ready to go beyond prototyping in Figma, Webflow’s ready
            to help you bring your{" "}
          </Text>
        </View>
      </View>
      <View style={styles.View_715_950}>
        <View style={styles.View_I715_950_706_931} />
        <View style={styles.View_I715_950_706_932}>
          <View style={styles.View_I715_950_706_933} />
          <View style={styles.View_I715_950_706_934}>
            <Text style={styles.Text_I715_950_706_934}>Contact us</Text>
          </View>
        </View>
        <View style={styles.View_I715_950_706_935}>
          <Text style={styles.Text_I715_950_706_935}>Home</Text>
        </View>
        <View style={styles.View_I715_950_706_937}>
          <Text style={styles.Text_I715_950_706_937}>About us</Text>
        </View>
        <View style={styles.View_I715_950_706_938}>
          <Text style={styles.Text_I715_950_706_938}>Features</Text>
        </View>
        <View style={styles.View_I715_950_706_939}>
          <Text style={styles.Text_I715_950_706_939}>Pricing</Text>
        </View>
        <View style={styles.View_I715_950_706_940}>
          <Text style={styles.Text_I715_950_706_940}>FAQ</Text>
        </View>
        <View style={styles.View_I715_950_706_941}>
          <Text style={styles.Text_I715_950_706_941}>Blog</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8ef/4a3c/3e7356eb798de2cf0baef6eb6e83db47"
          }}
          style={styles.ImageBackground_I715_950_1117_483}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("264%") },
  View_904_896: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("197%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I904_896_547_576: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 30, 83, 1)"
  },
  View_I904_896_706_538: {
    flexGrow: 1,
    width: wp("66%"),
    height: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("13%")
  },
  View_I904_896_705_523: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_I904_896_705_524: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I904_896_705_526: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I904_896_705_528: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I904_896_705_529: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I904_896_705_533: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I904_896_705_534: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I904_896_705_522: {
    width: wp("25%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    justifyContent: "flex-start"
  },
  Text_I904_896_705_522: {
    color: "rgba(244, 246, 252, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_896_706_577: {
    width: wp("25%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I904_896_706_577: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_896_705_521: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    justifyContent: "flex-start"
  },
  Text_I904_896_705_521: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_896_706_539: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54%")
  },
  View_I904_896_547_578: {
    width: wp("100%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I904_896_547_604: {
    width: wp("15%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_I904_896_547_604: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_896_547_583: {
    width: wp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    justifyContent: "flex-start"
  },
  Text_I904_896_547_583: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_896_547_584: {
    width: wp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    justifyContent: "flex-start"
  },
  Text_I904_896_547_584: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_896_547_585: {
    width: wp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    justifyContent: "flex-start"
  },
  Text_I904_896_547_585: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_896_547_586: {
    width: wp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    justifyContent: "flex-start"
  },
  Text_I904_896_547_586: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_896_547_587: {
    width: wp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    justifyContent: "flex-start"
  },
  Text_I904_896_547_587: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_896_547_588: {
    width: wp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    justifyContent: "flex-start"
  },
  Text_I904_896_547_588: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I904_896_547_589: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("14%")
  },
  View_I904_896_778_990: {
    flexGrow: 1,
    width: wp("32%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("41%")
  },
  View_I904_896_706_578: {
    width: wp("32%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(252, 217, 128, 1)"
  },
  View_I904_896_706_579: {
    width: wp("21%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I904_896_706_581: {
    width: wp("11%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I904_896_706_581: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_896_706_582: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I904_896_706_582: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_896_706_584: {
    width: wp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "flex-start"
  },
  Text_I904_896_706_584: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I904_896_706_585: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "flex-start"
  },
  Text_I904_896_706_585: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_239_64: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("122%"),
    minHeight: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("57%")
  },
  View_103_95: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_103_95: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1121_535: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51%"),
    justifyContent: "flex-start"
  },
  Text_1121_535: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1121_533: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_1121_533: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1121_536: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_1121_536: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1121_572: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("114%"),
    justifyContent: "flex-start"
  },
  Text_1121_572: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1121_562: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("97%")
  },
  View_1121_563: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1121_564: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1121_564: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1121_565: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_1121_566: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  View_1121_567: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1121_567: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1121_568: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_1121_569: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_1121_570: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1121_570: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1121_571: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_1121_534: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_1121_534: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_175_164: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("30%")
  },
  View_175_165: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_175_165: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_175_166: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_175_166: {
    color: "rgba(40, 41, 56, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_715_950: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I715_950_706_931: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 30, 83, 1)"
  },
  View_I715_950_706_932: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I715_950_706_933: {
    width: wp("12%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I715_950_706_934: {
    width: wp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I715_950_706_934: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I715_950_706_935: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I715_950_706_935: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I715_950_706_937: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I715_950_706_937: {
    color: "rgba(187, 187, 203, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I715_950_706_938: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I715_950_706_938: {
    color: "rgba(187, 187, 203, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I715_950_706_939: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I715_950_706_939: {
    color: "rgba(187, 187, 203, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I715_950_706_940: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I715_950_706_940: {
    color: "rgba(187, 187, 203, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I715_950_706_941: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I715_950_706_941: {
    color: "rgba(187, 187, 203, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I715_950_1117_483: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("4%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
