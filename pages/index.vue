<template>
  <b-container fluid class="mainContainer">

    <b-row class="">
      <b-col cols="12" sm="12" md="4" lg="4" style="background: whitesmoke ; border-radius: 10px"
             class="justify-content-center">
        <profile/>

        <!-- Education -->
        <b-col class="no-gutters">
          <sectiontitle>
            <template v-slot:icon>
              <fa icon="graduation-cap"></fa>
            </template>
            <template v-slot:title>
              Education
            </template>
          </sectiontitle>
          <b-col class="no-gutters">
            <ul style="list-style: none; " class="no-gutters nolistPadding">

              <li>
                <b>MSc Electrical and Electronics engineering</b>
              </li>
              <li>
                Master by research
              </li>
              <li>
                <fa icon="building"/>
                University College Cork - Ireland <ex-link-icon link="http://www.ucc.ie"/>
              </li>
              <li>
                <fa icon="calendar"/>
                2019-2021 (expected)
              </li>
              <hr/>
              <!-- Russia MSC -->
              <li>
                <b>MSc Information science and Technology</b>
              </li>
              <li>
                IOT Track
              </li>
              <li>
                <fa icon="building"/>
                Skoltech - Russia <ex-link-icon link="http://skoltech.ru"/>
              </li>
              <li>
                <fa icon="calendar"/>
                2018-2019
              </li>
              <hr/>
              <!-- Iran MSC -->
              <li>
                <b>Computer Engineering</b>
              </li>
              <li>
                Hardware Track
              </li>
              <li>
                <fa icon="building"/>
                Ferdowsi University of Mashhad - Iran <ex-link-icon link="http://en.um.ac.ir/"/>
              </li>
              <li>
                <fa icon="calendar"/>
                2013-2018
              </li>
              <hr/>
            </ul>
          </b-col>
        </b-col>

        <!-- Languages -->
        <b-col class="no-gutters">
          <sectiontitle>
            <template v-slot:icon>
              <fa icon="language"></fa>
            </template>
            <template v-slot:title>
              Languages
            </template>
          </sectiontitle>
          <b-col class="no-gutters">
            <ul style="list-style: none; " class="no-gutters nolistPadding">

              <li>
                Persian (Farsi)-Native
              </li>
              <li style="font-size: smaller">
                English - IELTS Certificate - Overall <b>7.0/9.0 (C1)</b>
              </li>
              <li style="font-size: smaller" class="text-center">
                [Speaking 8 - Listening 8 - Reading 6.5 - Writing 5.5]
              </li>
              <hr/>
            </ul>
          </b-col>
        </b-col>

        <!-- Residency -->
        <b-col class="no-gutters">
          <sectiontitle>
            <template v-slot:icon>
              <fa icon="house-user"></fa>
            </template>
            <template v-slot:title>
              Work permit
            </template>
          </sectiontitle>
          <b-col class="no-gutters">
            <p align="justify" style="font-size: smaller">
              I’m currently residing in Ireland using student visa (Stamp 2), at the moment I'm able to work only part
              time, but after
              graduation (Sept 2021), I will be automatically able to work in Ireland for two years (Stamp 1G) based on
              <a href="http://www.inis.gov.ie/en/INIS/Pages/Student%20Pathway"> Third Level
                Graduate Programme work permit</a>. Considering my major and profession, I would be eligible for
              Critical
              skills work permit at any stage.
            </p>
          </b-col>
        </b-col>

        <b-row style="padding: 20px">
          <b-col style="font-style: italic">
            <p align="justify">
              I hereby consent to the processing of the personal data in this CV by anyone who receives this CV for the
              sole
              purpose of consideration of my skills and experience for professional opportunities.
            </p>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" sm="12" md="8" lg="8" class="">
        <!-- About Me -->
        <b-col fluid class="no-gutters" style="width: 100%">
          <sectiontitle>
            <template v-slot:icon>
              <fa icon="id-card"></fa>
            </template>
            <template v-slot:title>
              About me
            </template>
          </sectiontitle>
          <b-col class="no-gutters">
            <p align="justify" style="">
              I am computer and electronics engineer with over 5 years of software and hardware programming
              experiences in industry and academic projects. My first commercial desktop application development goes
              back to 2010, at age of 15, when I released the first version of my dental clinic management app which is
              still in use.
              At the age of sixteen, I got familiar with Robotics, and I started developing microcontroller based
              devices to control the robots, which later, at age of 17, led to a national prestigious award, Khawrizmi
              Award, for developing a novel path planning algorithm on a robot. Later on, I achieved two international
              awards in the same field. If you ask me what is your main asset in working environment, I would say, <span
              class="greentext"> I'm so passionate about my profession, and I truly love
              what I do as a computer and electronics engineer. </span>
            </p>
          </b-col>
        </b-col>

        <!-- At a glance -->
        <b-col class="no-gutters">
          <sectiontitle>
            <template v-slot:icon>
              <fa icon="eye"></fa>
            </template>
            <template v-slot:title>
              At a glance
            </template>
          </sectiontitle>
          <b-col class="no-gutters" style="padding-top: 10px">
            <b-badge variant="success" class="glancebadges" style="">
              <fa icon="dot-circle" class=""/>
              Main skills : Computer programming, electronics and robotics
            </b-badge>

            <b-badge variant="success" class="glancebadges" style="">
              <fa icon="dot-circle"/>
              Bachelor in Computer engineering and Masters in Electronics in Ireland
            </b-badge>

            <b-badge variant="success" class="glancebadges" style="">
              <fa icon="dot-circle"/>
              Full-scholarship at all studying levels (BSc Iran, MSc Russia, MSc Ireland)
            </b-badge>

            <b-badge variant="success" class="glancebadges" style="">
              <fa icon="dot-circle"/>
              5 years of professional project development
            </b-badge>

            <b-badge variant="success" class="glancebadges" style="">
              <fa icon="dot-circle"/>
              More than four industrial projects
            </b-badge>

            <b-badge variant="success" class="glancebadges" style="">
              <fa icon="dot-circle"/>
              One US-Patent
            </b-badge>

            <b-badge variant="success" class="glancebadges" style="">
              <fa icon="dot-circle"/>
              Five national patent
            </b-badge>

            <b-badge variant="success" class="glancebadges" style="">
              <fa icon="dot-circle"/>
              Two International compeition awards
            </b-badge>

            <b-badge variant="success" class="glancebadges" style="">
              <fa icon="dot-circle"/>
              Five practical work academic publication
            </b-badge>

            <b-badge variant="success" class="glancebadges" style="">
              <fa icon="dot-circle"/>
              Fluent in English (C1)
            </b-badge>

            <b-badge variant="success" class="glancebadges" style="">
              <fa icon="dot-circle"/>
              Working permit in Ireland
            </b-badge>


          </b-col>
        </b-col>

        <!-- Experiences -->
        <b-col class="no-gutters" style="padding-top: 10px">
          <sectiontitle>
            <template v-slot:icon>
              <fa icon="briefcase"></fa>
            </template>
            <template v-slot:title>
              Experiences
            </template>
          </sectiontitle>
          <b-col class="no-gutters" style="padding-top: 10px">
            <experiences-item
              exp_title="Electrical and embedded systems engineer"
              exp_role="Full-funded master student"
              exp_place="Tyndall National Institute – University College Cork – Ireland"
              exp_date="Sep 2019-Now (Expected finish date : Sep 2021)">
              <template v-slot:place_link>
                <ex-link-icon link="http://www.tyndall.ie"/>
              </template>
            </experiences-item>

            <experiences-item
              exp_title="Robotics and embedded engineer intern"
              exp_role=""
              exp_place="Sberbank Robotics lab – Moscow – Russia"
              exp_date="May - August 2019">

            </experiences-item>

            <experiences-item
              exp_title="Electronics and embedded devices team leader"
              exp_role="National bursary bachelor student"
              exp_place="FUM Robotics Lab – Ferdowsi University of Mashhad – Iran"
              exp_date="Sep 2013-Sep 2018">
              <template v-slot:place_link>
                <ex-link-icon link="http://fumrobotics.ir"/>
              </template>
            </experiences-item>

            <experiences-item
              exp_title="Co-Founder and vice president"
              exp_role=""
              exp_place="FUM Robotics community – Ferdowsi University of Mashhad – Iran"
              exp_date="Jan 2014-March 2017"/>


            <experiences-item
              exp_title="Ferdowsi University Summer courses lecturer"
              exp_role="Altium designer - schematic and PCB design - Lecturer"
              exp_role1="STM32 bootcamp - Lecturer"
              exp_place="FUM Robotics community – Ferdowsi University of Mashhad – Iran"
              exp_date="2014-2018"/>

            <experiences-item
              exp_title="Teaching assistant"
              exp_role="VHDL and FPGA Design – Dr. Maryam Zomorodi"
              exp_role1="Robotics and Dynamics – Dr.Alireza Akbarzadeh Totoonchi"
              exp_role2="Introduction to computer programming using C – Dr. Saeed Abrishami"
              exp_place="Ferdowsi University of Mashhad – Iran"
              exp_date="2013-2018"/>


          </b-col>
        </b-col>

        <!-- Skills -->
        <b-col class="no-gutters">
          <sectiontitle>
            <template v-slot:icon>
              <fa icon="dharmachakra"></fa>
            </template>
            <template v-slot:title>
              Skills
            </template>
          </sectiontitle>
          <b-col class="no-gutters" style="font-size: small">
            <ul style="list-style: none; padding-top: 10px" class="no-gutters nolistPadding">
              <li>
                <b-badge variant="warning" style="font-size: 13px"> Computer programming</b-badge>
                Java, C#, Python and NodeJS – Desktop applications, Machine learning, deep learning experiences
              </li>

              <li>
                <b-badge variant="warning" style="font-size: 13px"> Embedded programming</b-badge>
                C, C++ on STM32, NRF and AVR families – FreeRTOS, network stacks, advanced debugging and analyzing
                firmware
              </li>

              <li>
                <b-badge variant="warning" style="font-size: 13px"> Electronics</b-badge>
                Digital and analog circuit design using Altium designer, Spice simulations, portable miniaturized low
                power devices, High power DC drivers, power control circuits and battery-powered mobile robots
              </li>

              <li>
                <b-badge variant="warning" style="font-size: 13px"> Robotics</b-badge>
                Deep knowledge in sensors, actuators, ROS and robotics simulation platforms – Industrial system design
              </li>
            </ul>
          </b-col>
        </b-col>
      </b-col>
    </b-row>


    <b-row class="justPrint">
      <b-col style="margin: 0.5em; margin-top: 4em" class="text-center">
        <h4>
          For further details and references please visit interactive version of this document on
          <a href="http://cv.hamedj.ir">
            <b-badge variant="dark" style="padding: 0.3em"> cv.hamedj.ir</b-badge>
          </a>
        </h4>
      </b-col>
    </b-row>
    <hr style="page-break-after: always"/>


    <!--    Next Page-->


    <b-row class="no-gutters">
      <b-col>
        <b-col class="no-gutters">
          <sectiontitle>
            <template v-slot:icon>
              <fa icon="shapes"></fa>
            </template>
            <template v-slot:title>
              <b-row><b-col sm="1" md="8" lg="8" >Projects</b-col>  <b-col lg="4" md="4" sm="11" style="font-size: min(13px,4vw)" class="justify-content-center text-center my-auto noPrint">[Click or tap for details]</b-col></b-row>
            </template>
          </sectiontitle>
          <b-col class="no-gutters" style="padding-top: 0.3em">

            <project-item
              proj_title="IMPAQT : miniaturized underwater sensors network platform"
              proj_role="Computer and Electronics engineer"
              proj_date="2019-Now">
              <p align="justify">

                IMPAQT <ex-link-icon link="http://impaqtproject.eu"/> is a European project aimed at promoting and supporting inland, coastal zone and offshore IMTA
                development. As a part of IMPAQT project, I'm developing a novel miniaturized low-power, low-cost
                acoustic Underwater Transmitter Node (UWTN) and gateway buoy to provide an underwater sensors networks
                platform to monitor and analyze marine environments. Each UWTN is integrating accelerometers and
                temperature sensors and a unique ID tag, that can be immersed in water and IMTA sites to monitor water
                flows, seaweeds movements and marine animals’ activities. It also has an auxiliary sensors interface
                that can be used to record the external sensors data, developed by other partners in IMPAQT project,
                such as Nitrite, Phosphate, and oxygen level sensors. The recorded data from internal and external
                sensors then will be transmitted at regular intervals based on the TDMA scheme to the gateway buoy using
                ultrasonic piezoelectric transducers. By utilizing sub-centimeter ultrasonic piezo transducers, unlike
                RF solutions, it is possible to transmit data at relatively long distances regardless of salinity of the
                water with a reasonable data rate. Each UWTN is also capable of performing pre-processing of the data
                using an ARM microcontroller onboard. The gateway buoy logs the received data, performs edge-processing
                and pushes the results to the cloud. The proposed platform enables the collection of sensors data in
                real-time from an underwater environment which can lead to further knowledge about what is happening
                beneath the water surface and result in the further development of IMTA sites. <a href="http://hamedj.ir/IMPAQT">Read more</a>
              </p>
              <b-row>
                <b-col sm="12" md="6">
                  <img src="@/assets/images/IMPAQT biotelemetry.jpg" class="media img-thumbnail img-fluid projectPic"
                       style="height: 300px;"/>
                </b-col>
                <b-col sm="12" md="6">
                  <img src="@/assets/images/EvalBoards-Annotated.jpg" class="media img-thumbnail img-fluid projectPic"
                       style="height: 300px;"/>
                </b-col>
              </b-row>

            </project-item>


            <project-item
              proj_title="aiRTLS : Sub decimeter accuracy RTLS "
              proj_role="Project manager, Embedded System Designer and Backend programmer "
              proj_date="2017-2019"
            >
              <p align="justify">
                I was in charge of developing a real-time location system, called AIRTLS as an application engineer in
                both hardware and software aspects. Initially, we aimed for delivering decimeter accuracy location
                service
                using ultra-wide band technologies in factories and industrial zones.

                As a hardware engineer, I designed the devices (Anchors and Tags) using Altium Designer, based on
                STM32F1xx microcontroller for anchors, NRF52xxx series for low power tags and DWM1000 as RF
                transceivers.
                The tags were able to work on a small batteries for almost 45 days with a location update frequency of
                every 2 seconds.

                As a software engineer, I designed a micro-service based architecture using different programming
                languages which helped me and future employees to use their own programming skills and add it to the
                system with little efforts. For initial software backbone, I used Java (and Kotlin) as the main program
                and backbone maintainer for managing processes, NodeJS as a endnode to facilitate connection to anchors
                (due to its great networking performance), Python as the multilateration and trilateration processor
                (due
                to its great resources for machine learning and artificial intelligence).
                I've used various trilateration techniques incorporated with BFGS optimization algorithm to deliver
                ~20cm
                accuracy in the final product.

                Finally with helping of my other colleagues we were able to install and maintain our product in a
                well-known company to monitor and analyze human resources behaviour.
              </p>
              <b-row>
                <b-col>
                  <a href="imgs/rtls1.jpg" target="_blank">
                    <img src="imgs/rtls1.jpg" class="center media img-thumbnail img-fluid projectPic"
                         style="max-height: 300px;"/>
                  </a>
                </b-col>
                <b-col>
                  <a href="imgs/rtls2.jpg" target="_blank">
                    <img src="imgs/rtls2.jpg" class="center media img-thumbnail img-fluid projectPic"
                         style="max-height: 300px;"/>
                  </a>
                </b-col>
              </b-row>
            </project-item>

            <project-item
              proj_title="FUM Bionic Hand V1, V2, V3"
              proj_role="Electronics and programming team leader "
              proj_date="2015-2018"
            >

              <p align="justify">
                I was doing researches on improvement the usability of FUM Bionic hand series, I was mainly responsible
                for miniaturized circuit design and firmware engineering on all three versions. My final BSc project was
                also developing a miniaturized motor control unit to be fitted in hand palm, enabling torque and speed
                mode control of 5 independent DC motors. It was a great chance for me to work as a team member in does
                challenging and unique project. This project is still going on by FUM robotics lab team.
              </p>
              <b-row>
                <b-col sm="12" md="3" class="text-center justify-content-center">
                  <a href="imgs/bionichand.jpg" target="_blank">
                    <img src="imgs/bionichand.jpg" class="media img-thumbnail img-fluid projectPic"
                         style="max-height: 300px;"/>
                  </a>
                </b-col>
                <b-col sm="12" md="3" class="text-center justify-content-center">
                  <a href="imgs/bionichand1.jpg" target="_blank">
                    <img src="imgs/bionichand1.jpg" class="media img-thumbnail img-fluid projectPic"
                         style="max-height: 300px;"/>
                  </a>
                </b-col>
                <b-col sm="12" md="3" class="text-center justify-content-center">
                  <a href="imgs/bionichand3.jpg" target="_blank">
                    <img src="imgs/bionichand3.jpg" class="media img-thumbnail img-fluid projectPic"
                         style="max-height: 300px;"/>
                  </a>
                </b-col>
                <b-col sm="12" md="3" class="text-center justify-content-center">
                  <a href="imgs/bionichand4.jpg" target="_blank">
                    <img src="imgs/bionichand4.jpg" class="media img-thumbnail img-fluid projectPic"
                         style="max-height: 300px;"/>
                  </a>
                </b-col>
              </b-row>

            </project-item>

            <project-item
              proj_title="Farhoosh Dataloggers"
              proj_role="Electronic designer and firmware engineer"
              proj_date="2017"
            />

            <project-item
              proj_title="FUM autonomous lawn mower robot"
              proj_role="System Designer, Electronics designer, and embedded software engineer"
              proj_date="2016-2018"
            >
              <p align="justify">
                I had the chance to work as electronics and embedded engineer in FUM Robotics lab on various projects. I
                was working as team leader for two years on FUM Autonomous lawn mower mobile robot funded by Mashhad
                municipality, to be used in public urban parks. This mobile robot is currently in use in various parks
                across Mashhad. I developed a FBus protocol based on FreeRTOS to communicate over six electronic
                boards(Motor Control unit, Power control unit, ... ) and keep them synchronized. I designed a high power
                (48v, 25A) H-Bridge driver, capable of Torque mode, speed mode control using PID loops under supervision
                of Dr Alireza Akbarzadeh tootoonchi and Dr Navid Yektay. I had the chance to work on IMU and navigation
                systems, RTK GPS, Linux integration and synchronization for GUI purposes, fail-safe mechanism for
                delivering a safe user-friendly mobile robot.
              </p>

              <b-row>
                <b-col>
                  <a href="imgs/lawnmower.jpg" target="_blank">
                    <img src="imgs/lawnmower.jpg" class="center media img-thumbnail img-fluid projectPic"
                         style="max-height: 300px;"/>
                  </a>
                </b-col>
                <b-col>
                  <a href="imgs/lawnmower1.jpg" target="_blank">
                    <img src="imgs/lawnmower1.jpg" class="center media img-thumbnail img-fluid projectPic"
                         style="max-height: 300px;"/>
                  </a>
                </b-col>
                <b-col>
                  <a href="imgs/lawnmower2.jpg" target="_blank">
                    <img src="imgs/lawnmower2.jpg" class="center media img-thumbnail img-fluid projectPic"
                         style="max-height: 300px;"/>
                  </a>
                </b-col>
                <b-col>
                  <a href="imgs/lawnmower3.jpg" target="_blank">
                    <img src="imgs/lawnmower3.jpg" class="center media img-thumbnail img-fluid projectPic"
                         style="max-height: 300px;"/>
                  </a>
                </b-col>

              </b-row>
            </project-item>

            <project-item
              proj_title="FUM Segway : Personal transporter robot"
              proj_role="Electronic designer, and embedded software engineer"
              proj_date="2013-2016"
            />

            <project-item
              proj_title="Automatic car oil changer controller design | wholesale production"
              proj_role="Electronic designer and firmware engineer"
              proj_date="2016"
            />

            <project-item
              proj_title="Smart air conditioner controller for hotels | wholesale production"
              proj_role="Electronic designer and firmware engineer"
              proj_date="2015"
            />

            <project-item
              proj_title="The blind cradle for blind and visually impaired children"
              proj_role="Electronic designer and firmware engineer"
              proj_date="2015"
            />


            <project-item
              proj_title="Clinic Dental lab management platform"
              proj_role="Self-managed project"
              proj_date="2009-2011"
            />


          </b-col>
        </b-col>
      </b-col>
    </b-row>

    <!--      Patents -->

    <b-row>
      <b-col>
        <b-col class="no-gutters">
          <sectiontitle>
            <template v-slot:icon>
              <fa icon="award"></fa>
            </template>
            <template v-slot:title>
              Patents
            </template>
          </sectiontitle>
          <b-col class="no-gutters" style="padding-top: 0.3em">

            <patent-item
              patent_title="Prosthetic hand with three level thumb and enhanced palm for power grasping"
              patent_role="IR-Patent. No: 139850140003005444"
              patent_date="2020"
            />

            <patent-item
              patent_title="System and method for muscle movements detection"
              patent_role="filed Jul 4, 2018 | US-Patent. No: US20190000380A1 "
              patent_date="2018"
            />

            <patent-item
              patent_title="Voluntary control system on force and pressure for amputee people who have prosthetic hand"
              patent_role="IR-Patent. No: 139550140003008515"
              patent_date="2016"
            />

            <patent-item
              patent_title="Muscles movement detection system for amputated limb and designing prosthesis based on it"
              patent_role="IR-Patent. No: 139550140003005272"
              patent_date="2016"
            />

            <patent-item
              patent_title="Integrating RFID with FUM Bionic Hand to improve user experience in grasping objects"
              patent_role="IR-Patent. No: 139550140003000428"
              patent_date="2016"
            />

            <patent-item
              patent_title="Controlling FUM Bionic Hand using Image processing for determining grasping gesture and EMG"
              patent_role="IR-Patent. No: 139550140003001528"
              patent_date="2016"
            />

          </b-col>
        </b-col>
      </b-col>
    </b-row>

    <!--      Honors -->
    <b-row>
      <b-col>
        <b-col class="no-gutters">
          <sectiontitle>
            <template v-slot:icon>
              <fa icon="award"></fa>
            </template>
            <template v-slot:title>
              Honors
            </template>
          </sectiontitle>
          <b-col class="no-gutters" style="padding-top: 0.3em">

            <honor-item
              honor_title="Master’s degree full-funded scholarship by EU-Horizon 2020"
              honor_role="Tyndall national institute - Ireland"
              honor_date="2019"
            />

            <honor-item
              honor_title="Master’s degree full-funded scholarship"
              honor_role="Skolkovo institute of science and technology - Russia"
              honor_date="2018"
            />

            <honor-item
              honor_title="Bachelor’s degree Exceptional Talents Admission Award"
              honor_role="Ferdowsi University of Mashhad - Iran"
              honor_date="2013"
            />

            <honor-item
              honor_title="1st place at RoboCup 2014 competition in Brazil"
              honor_role="Mentor |  Joao Pessoa - Brazil"
              honor_date="2014"
            />

            <honor-item
              honor_title="2nd place at RoboCup 2012 competition in Mexico"
              honor_role="Team member |  Mexico City - Mexico"
              honor_date="2012"
            />

            <honor-item
              honor_title="3rd place at IranOpen 2018 regional RoboCup Competition"
              honor_role="Team member |  Tehran - Iran"
              honor_date="2018"
            />

            <honor-item
              honor_title="5th place and honorary diploma at 15th Iran Skills robotics competition "
              honor_role="Team member |  Karaj - Iran"
              honor_date="2014"
            />

            <honor-item
              honor_title="1st place at IranOpen 2014 regional RoboCup Competition"
              honor_role="Team member |  Tehran - Iran"
              honor_date="2014"
            />

            <honor-item
              honor_title="1st place at IranOpen 2012 regional RoboCup Competition"
              honor_role="Team member |  Tehran - Iran"
              honor_date="2012"
            />

            <honor-item
              honor_title="1st place at 2nd PnuOpen National Robotic Competition"
              honor_role="Team member |  Mazandaran - Iran"
              honor_date="2011"
            />


            <honor-item
              honor_title="1st place at 1st PnuOpen National Robotic Competition"
              honor_role="Team member |  Tehran - Iran"
              honor_date="2010"
            />

            <honor-item
              honor_title="1st place at 12th Khwarizmi national festival award"
              honor_role="Team member |  Tehran - Iran"
              honor_date="2010"
            />

            <honor-item
              honor_title="1st place at province Avicenna Festival for juniors"
              honor_role="Team member |  Tehran - Iran"
              honor_date="2009"
            />

          </b-col>
        </b-col>
      </b-col>
    </b-row>

    <!-- Publication -->
    <b-row>
      <b-col>
        <b-col class="no-gutters">
          <sectiontitle>
            <template v-slot:icon>
              <fa icon="newspaper"></fa>
            </template>
            <template v-slot:title>
              Publication
            </template>
          </sectiontitle>
          <b-col class="no-gutters" style="padding-top: 0.3em">

            <pub-item
              pub_title="Development of a Low-Power Underwater NFC-Enabled Sensor Device for Seaweed Monitoring"
              pub_authors="C Peres, M Emam, H Jafarzadeh, M Belcastro, B O’Flynn"
              pub_subtitle="MDPI Sensors 2021"
              pub_date="2021"
            />

            <pub-item
              pub_title="IMPAQT Miniaturized Underwater Acoustic Telemetry Platform: Transmitter Node System Design"
              pub_authors=" H Jafarzadeh, M Belcastro, B O’Flynn"
              pub_subtitle="ThinkMind (TM) - SensorComm 2020 - 🥇 Best Paper Award"
              pub_date="2020"
            />

            <pub-item
              pub_title="IMPAQT miniaturized underwater acoustic sensors network platform"
              pub_authors=" H Jafarzadeh, M Belcastro, B O’Flynn"
              pub_subtitle="AGU Fall meeting 2020"
              pub_date="2020"
            />

            <pub-item
              pub_title="Theoretical models for underwater RFID and the impact of water salinity on the design of wireless systems"
              pub_authors="C Peres, M Pigeon, N Rather, D Gawade, J Buckley, H Jafarzadeh, B O'Flynn"
              pub_subtitle="International Journal on Advances in Networks and Services - IARIA 2020"
              pub_date="2020"
            />

            <pub-item
              pub_title="Low Cost and Energy efficient Vehicle tracking, and traffic monitoring system based on MEMS and Wireless sensors network – Presented in Persian "
              pub_subtitle="http://sciot2017.um.ac.ir - 🥇 Best Paper Award"
              pub_date="2017"
            />

            <pub-item
              pub_title="Simplifying user interaction solutions for the FUM bionic Hand-I"
              pub_subtitle="DOI: 10.1109/ICRoM.2016.7886785"
              pub_date="2016"
            />


            <pub-item
              pub_title="Android application for mobile phones to communicate with pattern glove and FUM Bionic Hand – Presented in Persian"
              pub_subtitle="http://www.civilica.com/Paper-CBCONF01-CBCONF01_0787.html"
              pub_date="2016"
            />

            <pub-item
              pub_title="Design and Construction of an artificial prosthesis Fum Bionic Hand - Best Paper & Presentation – Presented in Persian"
              pub_subtitle="http://itcc2016.ir"
              pub_date="2016"
            />

            <pub-item
              pub_title="Study on Effective Parameters in Increasing the Motor Shaft Strength in Two Wheeled Robot Using Taguchi Method – Presented in Persian"
              pub_subtitle="https://icise.um.ac.ir"
              pub_date="2016"
            />

            <pub-item
              pub_title="Using RFID in improving user experience in using FUM Bionic Hand – Presented in Persian"
              pub_subtitle="http://itcc2015.ir"
              pub_date="2015"
            />


          </b-col>
        </b-col>
      </b-col>
    </b-row>

    <!-- References -->
    <b-row>
      <b-col class="no-gutters noPrint" style="padding-top: 10px">
        <sectiontitle>
          <template v-slot:icon>
            <fa icon="paperclip"></fa>
          </template>
          <template v-slot:title>
            References
          </template>
        </sectiontitle>
        <b-col class="no-gutters" style="padding-top: 10px">
          <ref-item
            ref_title="Dr. Brendan O’Flynn"
            ref_role="Head of Group in Tyndall national institute"
            ref_role1="Wireless sensors network"
            ref_role2="Faculty of electrical engineering – University college cork"
            ref_email="Brendan.oflynn@tyndall.ie"
          >
            <template v-slot:refimg>
              <img class="img-fluid" src="@/assets/images/brendan.jpg"/>
            </template>
          </ref-item>

          <ref-item
            ref_title="Prof. Alireza Akbarzadeh tootoonchi"
            ref_role="Professor at Department of Mechanical Engineering"
            ref_role1="Founding member of Center of Excellence on Soft Computing - Intelligent Information Processing"
            ref_role2="Faculty of Engineering – Ferdowsi University of Mashhad"
            ref_email="ali_akbarzadeh_t@yahoo.com - ali_akbarzadeh@um.ac.ir"
          >
            <template v-slot:refimg>
              <img class="img-fluid" src="@/assets/images/akbarzadeh.jpg"/>
            </template>
          </ref-item>


          <ref-item
            ref_title="Prof. Hamidreza PourReza"
            ref_role="Full Professor at Department of  Computer Engineering"
            ref_role1="President of Faculty Engineering of Ferdowsi University of Mashhad"
            ref_role2="Faculty of Engineering – Ferdowsi University of Mashhad"
            ref_email="hpourreza@um.ac.ir"
          >
            <template v-slot:refimg>
              <img class="img-fluid" src="@/assets/images/pourreza.jpg"/>
            </template>
          </ref-item>

          <ref-item
            ref_title="Dr. Ehsan Fazl Ersi"
            ref_role="Associate Professor at Department of Computer Engineering"
            ref_role1="Co-Founder and CEO of Ocular ai"
            ref_role2="Faculty of Engineering – Ferdowsi University of Mashhad"
            ref_email="fazlersi@um.ac.ir"
          >
            <template v-slot:refimg>
              <img class="img-fluid" src="@/assets/images/fazl.png" style="width: 200px"/>
            </template>
          </ref-item>


        </b-col>
      </b-col>
    </b-row>

    <b-row class="noPrint">
      <b-col class="text-center" style="color: #6996be; margin-top: 3em; margin-bottom: 3em">
        Built using <a href="https://nuxtjs.org/"> Nuxt.JS </a> and <a href="https://vuejs.org/">Vue.JS</a> by myself.
        if you liked it, feel free to fork it from <a href="https://github.com/HamedJafarzadeh/MyNuxtCV">my github
        repository</a>.
      </b-col>
    </b-row>

    <div class="noPrint">
      <div v-if="printtoastflag" aria-live="polite" aria-atomic="true" tabindex="0" class="toast show  printToast" style="min-height: 100px">
        <div class="toast-header">
          <strong class="mr-auto">Hi :)</strong>
          <button type="button" class="ml-2 mb-1 close" v-on:click="printtoastflag = false" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body">
          Welcome to my online CV document. This document is print-friendly. you can save it as a PDF or print if, it is necessary.
          <p style="color: #4da74f;margin: 0">Save papers => Save trees => Save world. <fa style="color: #4da74f" icon="leaf"/> </p>
        </div>
    </div>


<!--      <div class="toast-header">-->
<!--        Hi :)-->
<!--        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">-->
<!--          <span aria-hidden="true">&times;</span>-->
<!--        </button>-->
<!--      </div>-->
<!--      <div class="toast-body">-->
<!--        -->
<!--      </div>-->
    </div>

  </b-container>

</template>

<script lang="ts">
import Vue from 'vue'
import Profile from "~/components/profile.vue";
import Sectiontitle from "~/components/sectiontitle.vue";
import ExperiencesItem from "~/components/experiences-item.vue";
import ProjectItem from "~/components/project-items.vue";
import PatentItem from "~/components/patent-items.vue";
import HonorItem from "~/components/honor-items.vue";
import PubItem from "~/components/pub-items.vue";
import RefItem from "~/components/ref-items.vue";
import ExLinkIcon from "~/components/exLinkIcon.vue";

function printNotify() {

}

export default Vue.extend({
  components: {ExLinkIcon, RefItem, PubItem, HonorItem, PatentItem, ProjectItem, ExperiencesItem, Sectiontitle, Profile},
  methods: {
    printNotify(variant = null) {
      // this.$bvToast.toast('Welcome to my online CV document. This document is print-friendly. you can save it as a PDF or print if it is really necessary.', {
      //   title: `Hi :)`,
      //   variant: 'success',
      //   toastClass: 'noPrint',
      //   solid: true,
      //   autoHideDelay: 8000
      // })
    },
    hideToast(){

    }
  },
  created() {
    // // this.printNotify();
    // console.log("Requesting to bot");
    // this.$axios.$post('http://server.hamedj.ir:2688/BotGateway/Log',
    //   `logLevel=CVVisit&logText=CV Page`,
    //   {
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     }
    //   }
    // )
  },
  data() {
    return {
      printtoastflag : true,
      modalShow: false,
      modalContent: '<p class="my-4">Hello from modal!</p>',
    }
  },
})


</script>

<style>

</style>
