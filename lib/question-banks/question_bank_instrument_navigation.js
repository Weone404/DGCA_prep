export const chapters = [

  {
    id: 'rn01',
    title: 'Instrument Approach Basics',
    icon: '🛬',
    part: 'Instrument Navigation',
    color: '#0F766E',
  },
  {
    id: 'rn02',
    title: 'VOR and NDB',
    icon: '🧭',
    part: 'Instrument Navigation',
    color: '#0F766E',
  },
  {
    id: 'rn03',
    title: 'ILS and Marker Beacons',
    icon: '📡',
    part: 'Instrument Navigation',
    color: '#0F766E',
  },
  {
    id: 'rn04',
    title: 'DME and RNAV',
    icon: '📍',
    part: 'Instrument Navigation',
    color: '#0F766E',
  },

  {
    id: 'ins01',
    title: 'Airspeeds (IAS/CAS/EAS/TAS)',
    icon: '💨',
    part: 'Aircraft Instruments',
    color: '#1D4ED8',
  },
  {
    id: 'ins02',
    title: 'Altimeters',
    icon: '📊',
    part: 'Aircraft Instruments',
    color: '#1D4ED8',
  },
  {
    id: 'ins03',
    title: 'Air Speed Indicator',
    icon: '⏱️',
    part: 'Aircraft Instruments',
    color: '#1D4ED8',
  },
  {
    id: 'ins04',
    title: 'Attitude Indicator',
    icon: '🛩️',
    part: 'Aircraft Instruments',
    color: '#1D4ED8',
  },
  {
    id: 'ins05',
    title: 'Autoflight Systems',
    icon: '🤖',
    part: 'Aircraft Instruments',
    color: '#7C3AED',
  },
  {
    id: 'ins06',
    title: 'Compass Systems',
    icon: '🧭',
    part: 'Aircraft Instruments',
    color: '#1D4ED8',
  },
  {
    id: 'ins07',
    title: 'EFIS',
    icon: '🖥️',
    part: 'Aircraft Instruments',
    color: '#7C3AED',
  },
  {
    id: 'ins08',
    title: 'EICAS / ECAM',
    icon: '⚠️',
    part: 'Aircraft Instruments',
    color: '#7C3AED',
  },
  {
    id: 'ins09',
    title: 'Engine Instruments',
    icon: '🔧',
    part: 'Aircraft Instruments',
    color: '#B45309',
  },
  {
    id: 'ins10',
    title: 'FANS and ACARS',
    icon: '📶',
    part: 'Aircraft Instruments',
    color: '#7C3AED',
  },
  {
    id: 'ins11',
    title: 'Flight Director',
    icon: '🎯',
    part: 'Aircraft Instruments',
    color: '#7C3AED',
  },
  {
    id: 'ins12',
    title: 'Flight Management System',
    icon: '🗺️',
    part: 'Aircraft Instruments',
    color: '#7C3AED',
  },
  {
    id: 'ins13',
    title: 'Fuel Instruments',
    icon: '⛽',
    part: 'Aircraft Instruments',
    color: '#B45309',
  },
  {
    id: 'ins14',
    title: 'GPWS',
    icon: '⛰️',
    part: 'Aircraft Instruments',
    color: '#B91C1C',
  },
  {
    id: 'ins15',
    title: 'Gyroscopic Instruments',
    icon: '🌀',
    part: 'Aircraft Instruments',
    color: '#1D4ED8',
  },
  {
    id: 'ins16',
    title: 'INS / IRS',
    icon: '🛰️',
    part: 'Aircraft Instruments',
    color: '#7C3AED',
  },
  {
    id: 'ins17',
    title: 'Mach Meter',
    icon: '🚀',
    part: 'Aircraft Instruments',
    color: '#1D4ED8',
  },
  {
    id: 'ins18',
    title: 'Pitot Static System',
    icon: '📡',
    part: 'Aircraft Instruments',
    color: '#1D4ED8',
  },
  {
    id: 'ins19',
    title: 'Radio Altimeters',
    icon: '📻',
    part: 'Aircraft Instruments',
    color: '#1D4ED8',
  },
  {
    id: 'ins20',
    title: 'TCAS',
    icon: '✈️',
    part: 'Aircraft Instruments',
    color: '#B91C1C',
  },
  {
    id: 'ins21',
    title: 'Temperature Indicators',
    icon: '🌡️',
    part: 'Aircraft Instruments',
    color: '#B45309',
  },
  {
    id: 'ins22',
    title: 'Turn and Slip Indicator',
    icon: '↩️',
    part: 'Aircraft Instruments',
    color: '#1D4ED8',
  },
  {
    id: 'ins23',
    title: 'Vertical Speed Indicator',
    icon: '📈',
    part: 'Aircraft Instruments',
    color: '#1D4ED8',
  },
  {
    id: 'ins24',
    title: 'Warning and Recording Systems',
    icon: '🔔',
    part: 'Aircraft Instruments',
    color: '#B91C1C',
  },
]

export const questions = {

  rn01: [
    {
      id: 'rn01_01',
      question: 'An instrument approach procedure is designed mainly to provide:',
      options: ['a safe descent path to landing', 'shorter taxi distance', 'more passenger comfort', 'higher fuel flow'],
      correct: 0,
      explanation: 'Instrument approach procedures guide an aircraft safely to a landing in poor visibility.',
    },
    {
      id: 'rn01_02',
      question: 'The primary reference for instrument navigation is:',
      options: ['the navigation aid and procedure', 'the cabin temperature', 'the passenger count', 'the paint scheme'],
      correct: 0,
      explanation: 'Instrument navigation depends on navigation aids and published procedures.',
    },
    {
      id: 'rn01_03',
      question: 'A missed approach is executed when:',
      options: ['the required visual or instrument requirements are not met', 'the aircraft is taxiing', 'the weather improves', 'the runway is clear'],
      correct: 0,
      explanation: 'A missed approach is required when the pilot cannot safely continue the approach.',
    },
    {
      id: 'rn01_04',
      question: 'A stable approach helps to:',
      options: ['reduce the chance of a go-around', 'increase fuel burn', 'reduce flaps', 'lower rpm'],
      correct: 0,
      explanation: 'A stable approach lowers the chance of a missed approach and unstable landing.',
    },
    {
      id: 'rn01_05',
      question: 'An approach briefing is important because it:',
      options: ['prepares the crew for the procedure', 'adds weight', 'reduces visibility', 'increases drag'],
      correct: 0,
      explanation: 'A briefing prepares the crew for the instrument procedure and expected actions.',
    },
    {
      id: 'rn01_06',
      question: 'Instrument procedures are published to:',
      options: ['standardize safe operations', 'increase ATC workload', 'reduce runway length', 'avoid weather'],
      correct: 0,
      explanation: 'Published procedures standardize safe instrument operations.',
    },
    {
      id: 'rn01_07',
      question: 'A pilot should monitor the approach path mainly to:',
      options: ['remain on the correct vertical and lateral path', 'reduce passenger noise', 'save fuel', 'change radio frequency'],
      correct: 0,
      explanation: 'Monitoring the path helps maintain correct alignment and descent profile.',
    },
    {
      id: 'rn01_08',
      question: 'An approach clearance is normally received from:',
      options: ['ATC', 'the cabin crew', 'ground handling', 'the weather office'],
      correct: 0,
      explanation: 'Approach clearance is provided by ATC for controlled airspace operations.',
    },
    {
      id: 'rn01_09',
      question: 'A missed approach point is a location where:',
      options: ['the pilot must decide whether to continue or go around', 'the aircraft turns off the runway', 'the aircraft enters the hold', 'the engine is shut down'],
      correct: 0,
      explanation: 'The missed approach point marks the decision point for continuing or going around.',
    },
    {
      id: 'rn01_10',
      question: 'The aim of instrument approach design is to:',
      options: ['provide a predictable procedure', 'reduce pilot training', 'increase runway slope', 'eliminate ATC'],
      correct: 0,
      explanation: 'Instrument approach design standardizes a predictable procedure for safe descent.',
    },
  ],
  rn02: [
    {
      id: 'rn02_01',
      question: 'A VOR provides bearing information relative to:',
      options: ['the VOR station', 'the runway threshold', 'the magnetic poles', 'the earth surface'],
      correct: 0,
      explanation: 'A VOR provides radial information from the station to the aircraft.',
    },
    {
      id: 'rn02_02',
      question: 'A VOR radial is measured from:',
      options: ['true north', 'magnetic north', 'runway heading', 'the aircraft tail'],
      correct: 0,
      explanation: 'VOR radials are referenced to magnetic north in the standard navigation frame.',
    },
    {
      id: 'rn02_03',
      question: 'An NDB provides guidance by means of:',
      options: ['radio bearings', 'visual lights', 'pressure altitude', 'GPS satellites'],
      correct: 0,
      explanation: 'NDB navigation relies on radio bearings from the ground station.',
    },
    {
      id: 'rn02_04',
      question: 'A VOR cone of ambiguity occurs because:',
      options: ['signals may be unreliable near the station', 'the aircraft is too slow', 'the weather is clear', 'the approach is visual'],
      correct: 0,
      explanation: 'VOR indications can become unreliable or ambiguous close to the station.',
    },
    {
      id: 'rn02_05',
      question: 'A VOR indicator is used mainly to determine:',
      options: ['bearing from the station', 'fuel quantity', 'aircraft weight', 'engine temperature'],
      correct: 0,
      explanation: 'The VOR indicator shows the aircraft’s bearing from the station.',
    },
    {
      id: 'rn02_06',
      question: 'The primary advantage of a VOR is that it provides:',
      options: ['line-of-position information', 'altitude information', 'oil pressure data', 'wind shear warnings'],
      correct: 0,
      explanation: 'A VOR provides line-of-position information through bearings from the beacon.',
    },
    {
      id: 'rn02_07',
      question: 'An ADF is normally tuned to:',
      options: ['an NDB', 'a VOR', 'an ILS localizer', 'a transponder'],
      correct: 0,
      explanation: 'ADF equipment is tuned to NDB stations for bearing information.',
    },
    {
      id: 'rn02_08',
      question: 'The bearing shown by ADF may be affected by:',
      options: ['station interference and aircraft attitude', 'fuel load only', 'runway width', 'crew size'],
      correct: 0,
      explanation: 'ADF bearings can be affected by station geometry and aircraft installation effects.',
    },
    {
      id: 'rn02_09',
      question: 'A VOR check is carried out to verify:',
      options: ['the VOR is operating correctly', 'the aircraft weight is legal', 'the cargo is balanced', 'the landing lights are on'],
      correct: 0,
      explanation: 'VOR checks verify that the navigation aid and receiver are functioning correctly.',
    },
    {
      id: 'rn02_10',
      question: 'A pilot should not rely on a VOR indication near the station because:',
      options: ['the cone of ambiguity can affect accuracy', 'the airspeed is too high', 'the weather is always good', 'the runway is closed'],
      correct: 0,
      explanation: 'VOR indications can become unreliable near the station because of the cone of ambiguity.',
    },
  ],
  rn03: [
    {
      id: 'rn03_01',
      question: 'The localizer provides guidance in:',
      options: ['azimuth', 'altitude', 'airspeed', 'temperature'],
      correct: 0,
      explanation: 'The localizer provides horizontal guidance toward the runway centerline.',
    },
    {
      id: 'rn03_02',
      question: 'The glide slope provides guidance in:',
      options: ['vertical descent', 'lateral drift', 'engine power', 'fuel quantity'],
      correct: 0,
      explanation: 'The glide slope provides vertical guidance for the descent path.',
    },
    {
      id: 'rn03_03',
      question: 'Marker beacons are used to indicate:',
      options: ['specific positions along the approach', 'windshear severity', 'engine temperatures', 'fuel types'],
      correct: 0,
      explanation: 'Marker beacons mark defined positions on the instrument approach.',
    },
    {
      id: 'rn03_04',
      question: 'The outer marker is used to indicate:',
      options: ['the beginning of the final approach segment', 'the touchdown point', 'the runway threshold', 'the missed approach point'],
      correct: 0,
      explanation: 'The outer marker identifies the beginning of the final approach segment.',
    },
    {
      id: 'rn03_05',
      question: 'The middle marker indicates:',
      options: ['a point near the decision altitude', 'engine start', 'holding pattern entry', 'takeoff roll'],
      correct: 0,
      explanation: 'The middle marker normally marks an area near the decision point for landing.',
    },
    {
      id: 'rn03_06',
      question: 'ILS guidance can be used when the aircraft is equipped with:',
      options: ['appropriate instruments', 'only a compass', 'only a stopwatch', 'only a radio'],
      correct: 0,
      explanation: 'ILS requires the aircraft to be equipped with suitable instruments for the approach.',
    },
    {
      id: 'rn03_07',
      question: 'A pilot should monitor the glide slope because it shows:',
      options: ['vertical guidance', 'runway length', 'fuel availability', 'weather radar data'],
      correct: 0,
      explanation: 'The glide slope provides vertical guidance to maintain the correct descent path.',
    },
    {
      id: 'rn03_08',
      question: 'The localizer is normally aligned with:',
      options: ['the runway centerline', 'the taxiway centerline', 'the terminal building', 'the approach light system'],
      correct: 0,
      explanation: 'The localizer is aligned with the runway centerline for the final approach.',
    },
    {
      id: 'rn03_09',
      question: 'A pilot may use a marker beacon to confirm:',
      options: ['distance from the runway', 'engine temperature', 'fuel quantity', 'altitude indication'],
      correct: 0,
      explanation: 'Marker beacons provide position information along the approach path.',
    },
    {
      id: 'rn03_10',
      question: 'An ILS procedure provides:',
      options: ['both lateral and vertical guidance', 'only weather information', 'only obstacle clearance', 'only fuel planning'],
      correct: 0,
      explanation: 'ILS provides both localizer and glide slope guidance.',
    },
  ],
  rn04: [
    {
      id: 'rn04_01',
      question: 'DME provides distance information from:',
      options: ['a navigation beacon', 'the runway threshold', 'ATC', 'the horizon'],
      correct: 0,
      explanation: 'DME measures slant range from the beacon to the aircraft.',
    },
    {
      id: 'rn04_02',
      question: 'RNAV is used mainly to:',
      options: ['navigate without relying solely on ground stations', 'reduce cabin pressure', 'increase approach speed', 'lower flap setting'],
      correct: 0,
      explanation: 'RNAV allows navigation using onboard systems and published waypoints.',
    },
    {
      id: 'rn04_03',
      question: 'A DME distance readout is usually expressed in:',
      options: ['NM', 'ft', 'kt', '°C'],
      correct: 0,
      explanation: 'DME distances are normally reported in nautical miles.',
    },
    {
      id: 'rn04_04',
      question: 'A pilot uses RNAV mainly to:',
      options: ['fly to defined waypoints', 'measure fuel temperature', 'increase cabin altitude', 'change runway lights'],
      correct: 0,
      explanation: 'RNAV guides the aircraft between defined waypoints.',
    },
    {
      id: 'rn04_05',
      question: 'DME can support approach navigation when:',
      options: ['the procedure uses DME', 'the weather is VFR', 'the runway is closed', 'the aircraft is on the ground'],
      correct: 0,
      explanation: 'Some procedures use DME as a navigation aid for position and distance.',
    },
    {
      id: 'rn04_06',
      question: 'RNAV system accuracy depends on:',
      options: ['the system and integrity of the source data', 'the airline logo', 'airport lights', 'passenger load'],
      correct: 0,
      explanation: 'RNAV performance depends on the system and the quality of the navigation source data.',
    },
    {
      id: 'rn04_07',
      question: 'A pilot should cross-check DME readings because they may be:',
      options: ['affected by slant range geometry', 'ignored by ATC', 'replaced by fuel data', 'limited to visual flight'],
      correct: 0,
      explanation: 'DME readings are slant-range values and should be interpreted with care.',
    },
    {
      id: 'rn04_08',
      question: 'A waypoint in RNAV is:',
      options: ['a defined position used for navigation', 'a runway threshold', 'a weather report', 'an engine gauge'],
      correct: 0,
      explanation: 'Waypoints are defined positions used in RNAV procedures.',
    },
    {
      id: 'rn04_09',
      question: 'A pilot should verify RNAV database currency because:',
      options: ['obsolete data can cause navigation errors', 'it changes the aircraft color', 'it reduces cabin pressure', 'it is not required'],
      correct: 0,
      explanation: 'Outdated navigation databases can lead to inaccurate procedures and guidance.',
    },
    {
      id: 'rn04_10',
      question: 'The use of DME on an approach often helps the pilot to:',
      options: ['determine distance from the station', 'change altitude', 'reduce engine rpm', 'enter the hold'],
      correct: 0,
      explanation: 'DME provides distance-from-station information during the approach.',
    },
  ],

  ins01: [
    {
      id: 'ins01_001',
      question: 'An aeroplane is cruising at FL60 with TAS of 100 knots in standard atmosphere. In these conditions :\n\n 1. The TAS is approximately 10% higher than the IAS.\n 2. The difference between EAS and CAS is negligible.\n 3. The speed displayed on the airspeed indicator is a CAS if position error and instrument error are zero.\n\nThe combination that regroups all of the correct statements is:',
      options: ['11, 2.', '2, 3.', '1, 2, 3.', '1, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_002',
      question: 'Maintaining CAS and flight level constant, a fall in ambient temperature results in :',
      options: ['Lower TAS because air density decreases.', 'Higher TAS because air density decreases.', 'Higher TAS because air density increases.', 'Lower TAS because air density increases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_003',
      question: 'The TAS is equal to the EAS only if',
      options: ['P = 1013.25 hPa and OAT = 15 degrees Celsius.', 'P = 1013.25 hPa, OAT = 15 degrees Celsius, and TAS>200 knots.', 'P = 1013.25 hPa, OAT = 15 degrees Celsius, and TAS < 20 knots.', 'P = 1013.25 hPa and OAT = 273 degrees Kelvin.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_004',
      question: 'The EAS is obtained from the CAS by correcting for :',
      options: ['Instrument error.', 'Compressibility error.', 'Density error.', 'Position error.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_005',
      question: 'When climbing at a constant CAS in standard atmosphere :',
      options: ['TAS decreases.', 'TAS remains constant.', 'TAS increases.', 'TAS first decreases, then remains constant above the tropopause.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_006',
      question: 'The compressibility error must be taken into account only for aeroplanes with :',
      options: ['Mach number equal to or greater than 1.', 'TAS greater than approximately 100 knots.', 'TAS greater than approximately 200 knots.', 'Mach number greater than 0.8.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_007',
      question: 'During a climb at a constant CAS below the tropopause in the standard atmosphere :',
      options: ['The mach number and the speed of sound decrease.', 'The mach number decreases and the speed of sound increases.', 'The mach number increases and the speed of sound decreases.', 'The mach number and the speed of sound increase.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_008',
      question: 'During a descent at constant CAS below the tropopause in standard atmosphere :',
      options: ['Mach number and TAS decrease.', 'Mach number and TAS increase.', 'Mach number decreases and TAS increases.', 'Mach number increases and TAS decreases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_009',
      question: 'The CAS is obtained from the IAS by correcting for the following errors:\n\n 1. Position.\n 2. Compressibility.\n 3. Instrument.\n 4. Density.',
      options: ['1, 3.', '3.', '1, 3, 4.', '2, 3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_010',
      question: 'Considering the maximum operational Mach number (MMO) and the maximum operational speed (VMO), the\ncaptain of a pressurized aircraft begins his descent from a high flight level. In order to meet his scheduled time\nof arrival, he decides to use the maximum ground speed at any time of the descent. He will be limited?',
      options: ['By the MMO.', 'By the VMO in still air.', 'Initially by the MMO, then by the VMO below a certain flight level.', 'Initially by the VMO, then by the MMO below a certain flight level.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_011',
      question: 'In a standard atmosphere and at the sea level, the calibrated airspeed (CAS) is?',
      options: ['Lower than the true airspeed (TAS).', 'Equal to the true airspeed (TAS).', 'Independent of the true airspeed (TAS).', 'Higher than the true airspeed (TAS).'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_012',
      question: 'With a constant weight, irrespective of the airfield altitude, an aircraft always takes off at the same?',
      options: ['Calibrated airspeed.', 'Ground speed.', 'True airspeed.', 'Equivalent airspeed.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_013',
      question: 'The calibrated airspeed (CAS) is obtained by applying to the indicated airspeed (IAS)?',
      options: ['A compressibility and density correction.', 'An instrument and position/pressure error correction.', 'An antenna and compressibility correction.', 'An instrument and density correction.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_014',
      question: 'The velocity maximum operating (VMO) is a speed expressed in ?',
      options: ['True airspeed (TAS).', 'Computed airspeed (COAS).', 'Calibrated airspeed (CAS).', 'Equivalent airspeed (EAS).'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_015',
      question: 'The limits of the white scale of an airspeed indicator are?',
      options: ['VSI for the lower limit and VFE for the upper limit.', 'VSO for the lower limit and VLE for the upper limit.', 'VSI for the lower limit and VLE for the upper limit.', 'VSO for the lower limit and VFE for the upper limit.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_016',
      question: 'The limits of the green scale of an airspeed indicator are?',
      options: ['VS1 for the lower limit and VNE for the upper limit.', 'VS1 for the lower limit and VLO for the upper limit.', 'VS1 for the lower limit and VNO for the upper limit.', 'VS0 for the lower limit and VNO for the upper limit.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_017',
      question: 'The limits of the yellow scale of an airspeed indicator are ?',
      options: ['VLO for the lower limit and VNE for the upper limit.', 'VLE for the lower limit and VNE for the upper limit.', 'VFE for the lower limit and VNE for the upper limit.', 'VNO for the lower limit and VNE for he upper limit.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_018',
      question: 'During a straight and uniform climb, the pilot maintains a constant calibrated airspeed (CAS)?',
      options: ['The Mach number increases and the true airspeed (TAS) increases.', 'The Mach number increases and the true airspeed (TAS) is constant.', 'The mach number is constant and the true airspeed (TAS) is constant.', 'The Mach number is constant and the true airspeed (TAS) decreases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_019',
      question: 'VLE is the maximum ?',
      options: ['Speed authorized in flight.', 'Flight speed with landing gear down.', 'Speed at which the landing gear can be operated with full safety.', 'Speed with flaps extended in a given position.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_020',
      question: 'VLO is the maximum?',
      options: ['Speed at which the landing gear can be operated with full safety.', 'Flight speed with landing gear down.', 'Speed with flaps extended in a given position.', 'Cruising speed not to be exceeded except in still air with caution.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_021',
      question: 'VNE is the maximum speed?',
      options: ['At which the flight controls can be fully deflected.', 'With flaps extended in landing position.', 'Which must never be exceeded.', 'Not to be exceeded except in still air and with caution.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_022',
      question: 'VNO is the maximum speed?',
      options: ['Which must never be exceeded.', 'At which the flight controls can be fully deflected.', 'With flaps extended in landing position.', 'Not to be exceeded except in still air and with caution.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_023',
      question: 'For a constant Calibrated Airspeed (CAS) and a level flight, a fall in ambient temperature will result in a?',
      options: ['Lower True Airspeed (TAS) due to a decrease in air density.', 'Lower True Airspeed (TAS) due to an increase in air density.', 'Higher True Airspeed (TAS) due to a decrease in air density.', 'Higher True Airspeed (TAS) due to an increase in air density.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_024',
      question: 'When climbing at a constant Mach number below the tropopause, in ISA conditions, the Calibrated Airspeed\n(CAS) will?',
      options: ['686 kt.', '596 kt.', '247 kt.', '307 kt.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_026',
      question: 'When descending through an isothermal layer at a constant Calibrated Airspeed (CAS), the True Airspeed\n(TAS) will?',
      options: ['Decrease.', 'Increase at a linear rate.', 'Remain constant.', 'Increase at an exponential rate.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_027',
      question: 'In a steady climb with the auto-throttle maintains a constant calibrated airspeed.\nIf the total temperature remains constant, the Mach number?',
      options: ['Decreases.', 'Remains constant.', 'Decreases if the static temperature is lower than the standard temperature.', 'Increases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_028',
      question: 'The airspeed indicator of a twin-engined aircraft comprises different sectors and color marks. The blue line\ncorresponds to the?',
      options: ['Maximum speed in operations, or VMO.', 'Optimum climbing speed with one engine inoperative, or Vy.', 'Speed not to be exceeded, or VNE.', 'Minimum control speed, or VMC.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_029',
      question: 'The airspeed indicator of an aircraft is provided with a moving red and white hatched pointer. This pointer\nindicates the ?',
      options: ['Speed indicated on the auto-throttle control box, versus temperature.', 'Speed indicated on the auto-throttle control box versus altitude.', 'Maximum speed in VMO operation versus altitude.', 'Maximum speed in VMO operation. Versus temperature.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_030',
      question: 'VFE is the maximum speed?',
      options: ['At which the flaps can be operated.', 'With the flaps extended in take-off position.', 'With the flaps extended in a given position.', 'With the flaps extended in landing position.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_031',
      question: 'An airplane is in steady descent. The auto-throttle maintains a constant Mach number.\nIf the total temperature remains constant, the calibrated airspeed?',
      options: ['Remains constant.', 'Decreases if the static temperature is lower than the standard temperature, increases if above.', 'Increases.', 'Decreases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_032',
      question: 'An aeroplane is in steady descent below the tropopause in the ISA. The auto-throttle maintains a constant\ncalibrated airspeed. If the total temperature remains constant, he Mach number?',
      options: ['Increases if the static temperature is lower than the standard temperature, decreases if higher.', 'Decreases.', 'Increases.', 'Remains constant.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins01_033',
      question: 'An aeroplane is in a steady climb. The auto-throttle maintain a constant Mach number. If the total temperature\nremains constant, the calibrated airspeed?',
      options: ['Decreases if the static temperature is lower than the standard temperature increases if higher.', 'Decreases.', 'Increases.', 'Remains constant. ALT'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins02: [
    {
      id: 'ins02_001',
      question: 'The altimeter is subject to static pressure error. This error varies according to ;',
      options: ['TAS and altimeter setting.', 'TAS and OAT.', 'Angle of attack and OAT.', 'TAS and angle of attack.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_002',
      question: 'The altimeter is subject to static pressure error. This error results from :',
      options: ['Incorrect pressure sensing caused by disturbance of airflow around the static ports.', 'Imperfect elasticity of the aneroid capsule.', 'Friction inside the instrument.', 'Cabin pressure slightly lower than outside air pressure due to airflow over the fuselage.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_003',
      question: 'A servo-assisted altimeter is more accurate than a simple altimeter because the small movements of :',
      options: ['The pointers are detected by a very sensitive electro-magnetic pick – off.', 'The capsules are detected by a very sensitive electro-magnetic pick-off.', 'The capsules are not taken into account.', 'The capsules are inhibited.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_004',
      question: 'The hysteresis error of an altimeter varies substantially with the ?',
      options: ['Time passed a given altitude.', 'Mach number of the aircraft.', 'Aircraft altitude.', 'Static temperature.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_005',
      question: 'When flying from a sector of warm air into one of colder air, the altimeter will?',
      options: ['Under read.', 'Be just as correct as before.', 'Show the actual height above ground.', 'Over read.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_006',
      question: 'At sea level, on a typical servo altimeter, the tolerance in feet from indicated must not exceed?',
      options: ['+/- 60 fee.', '+/- 75 feet.', '+/- 30 feet.', '+/- 70 feet.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_007',
      question: 'The altitude indicated on board and aircraft flying in an atmosphere where all the atmosphere layers below the\naircraft are cold is?',
      options: ['Equal to the standard altitude.', 'Lower than the real altitude. The same as the real altitude.', 'The same as the real altitude.', 'Higher than the real altitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_008',
      question: 'The purpose of the vibrating device of an altimeter is to ?',
      options: ['Allow damping of the measurement in the unit.', 'Reduce the hysteresis effect.', 'Reduce the effect of friction in the linkages.', 'Inform the crew of a failure of the instrument.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_009',
      question: 'The vertical speed indicator of an aircraft flying at a true airspeed of 100 kt, in a descent with a slope of 3\ndegrees, indicates?',
      options: ['-300 ft/min.', '-150 ft/min.', '-250 ft/min.', '-500 ft/min.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_010',
      question: 'The altitude indicated on board an aircraft flying in an atmosphere where all atmosphere layers below the\naircraft are warm is?',
      options: ['Equal to the standard altitude.', 'Higher than the real altitude.', 'The same as the real altitude.', 'Lower than the real altitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_011',
      question: 'The primary factor which makes the servo-assisted altimeter more accurate than the simple pressure altimeter is\nthe use of?',
      options: ['A sub-scale logarithmic function.', 'An induction pick-off device.', 'More effective temperature compensating leaf springs.', 'Combination of counters/pointers.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_012',
      question: 'What will happen to the altimeter reading in a right sideslip, if an aircraft has a static vent at each side of the\nfuselage, but the left one is blocked?',
      options: ['Over read.', 'Under read.', 'No change.', 'Depends on altitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_013',
      question: 'From what is true altitude derived?',
      options: ['Pressure altitude.', 'Density altitude.', 'Temperature altitude.', 'Difference between total pressure and static pressure.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_014',
      question: 'What is QNH?',
      options: ['Ambient pressure at the airfield.', 'Sea level pressure based on ambient pressure at the airfield.', 'Sea level pressure.', 'Sea level pressure in the ISA.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_015',
      question: 'What is QNH?',
      options: ['Ambient pressure at msl.', 'The pressure to be set on the altimeter subscale to obtain an indication of zero on the runway.', 'The pressure to be set on the altimeter subscale to obtain a reading of the pressure altitude of the runway.', 'The pressure to be set on the altimeter subscale to obtain density altitude when on the runway.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_016',
      question: 'What is the true altitude of an aircraft if its altimeter indicated 16000 ft when the ambient temperature was - 30°\nC?',
      options: ['15200 ft.', '15400 ft.', '16200 ft.', '16400 ft.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_017',
      question: 'What will happen to the indicated altitude if an aircraft in level flight passes into a warmer air mass?',
      options: ['Over indicate.', 'Under indicate.', 'Not change.', 'Remain constant only if above the tropopause.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_018',
      question: 'What is density altitude?',
      options: ['Pressure altitude corrected for ambient temperature.', 'True altitude.', 'Pressure altitude corrected for density changes.', 'True altitude corrected for density changes.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_019',
      question: 'What will happen if an aircraft has two altimeters, one of which is compensated for position error, whilst the\nother is not?',
      options: ['One will over read at high airspeeds.', 'One will under read at high airspeeds.', 'One will under read close to the ground.', 'The ADC will compensate automatically, so both with read correctly.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_020',
      question: 'Why are vibrators sometimes fitted in altimeters?',
      options: ['Overcome friction.', 'Overcome inertia.', 'Overcome hysteresis.', 'Reduce lag.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_021',
      question: 'What will happen to altimeter indication if an aircraft in level flight enters a cold front?',
      options: ['Over indication.', 'Under indication.', 'No change.', 'No change above the tropopause.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_022',
      question: 'A barometric altimeter comprises of?',
      options: ['An aneroid capsule sensing static pressure.', 'An aneroid capsule sensing pitot pressure.', 'A differential capsule sensing pitot and static pressures.', 'A bellows sensing temperature and static pressure.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_023',
      question: 'If pressure altitude is 30000 ft, indicated TAT is – 10, mach number is 0.82, what is the density altitude?',
      options: ['31000 ft.', '30472 ft.', '30573 ft.', '30674 ft.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_024',
      question: 'If QNH is 999 hPa, what is the pressure altitude at an elevation of 25000 ft?',
      options: ['25100 ft.', '25200 ft.', '25300 ft.', '25400 ft.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_025',
      question: 'If pressure altitude is 22800 ft, at an elevation of 22000 ft, what is QNH?',
      options: ['985 hPa.', '976 hPa.', '1034 hPa.', '1026 hPa.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_026',
      question: 'If field elevation is 4000 ft amsl and QNH is 900 mb, what is the pressure altitude ?',
      options: ['7390.', '6390.', '610.', '5540.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_027',
      question: 'If field elevation is 3500 ft amsl and QFE is 1020 mb, what is the pressure altitude?',
      options: ['210.', '-210.', '3710.', '3290.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_028',
      question: 'If pressure altitude is 3700 ft amsl and QNH is 1000 mb, what is field elevation?',
      options: ['3310.', '3210.', '390.', '490.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_029',
      question: 'Density altitude is?',
      options: ['The altitude at which the existing density would occur in the ISA.', 'The density at which the existing temperature would occur in the ISA.', 'The elevation at which the existing density would occur in the ISA.', 'The pressure altitude corrected for density deviation.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_030',
      question: 'The pressure altitude of the field can be found by ?',
      options: ['Setting QNH on the altimeter subscale.', 'Setting QFE on the altimeter subscale.', 'Setting 1013 mb on the altimeter subscale.', 'From an ADC only.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_031',
      question: 'If field pressure altitude is 5000 ft amsl and OAT is 25°C, what is the density altitude?',
      options: ['5000 + 118 (25 – (15 – (5 x 1.98))) = 7348.2 ft.', '5000 – 118 (25 – (15 + (5 x 1.98))) = 4988.2 ft.', '500 + 118 (25 + (15 – (5 x 1.98))) = 8551.8 ft.', '5000 – 118 (25 + (15 + (5 x (5 x 1.98))) = 10888.2 ft.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_032',
      question: 'If QFE is 1022 hPa what is the pressure altitude of the field?',
      options: ['270 ft amsl.', '-270 ft amsl.', '30660 ft amsl.', '500 ft amsl.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_033',
      question: 'If QNH is 1000 hPa and field elevation is 4500 ft amsl, what is QFE?',
      options: ['850 hPa.', '163 hPa.', '-850 hPa.', '900 hPa.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_034',
      question: 'Pressure altitude is ?',
      options: ['The altitude above sea level.', 'The altimeter indication when QFE is set on the sub-scale.', 'The altimeter indication when QNH is set on the subscale.', 'The altimeter indication when 1013.25 hPa is set on the sub-scale.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_035',
      question: 'Which of the following cause air density to decrease?',
      options: ['Increasing humidity, increasing altitude, increasing temperature.', 'Increasing humidity, increasing altitude, decreasing temperature.', 'Increasing humidity, decreasing altitude, increasing temperature.', 'Decreasing humidity, increasing altitude, decreasing temperature.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_036',
      question: 'If QNH changes from 1013 hPa to 1022 hPa this will?',
      options: ['Increase field elevation.', 'Decrease field elevation.', 'Not affect field elevation.', 'Decrease QFE.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_037',
      question: 'If QEF changes from 1013 hPa to 1022 hPa will?',
      options: ['Increase field elevation.', 'Not affect QNH.', 'Increase QNH.', 'Decrease QNH.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_038',
      question: 'As pressure altitude increases ?',
      options: ['Temperature decreases.', 'Temperature increases.', 'Temperature increases then remains constant.', 'Temperature decreases then remains constant.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_039',
      question: 'At a fixed pressure altitude an increase in temperature will?',
      options: ['Decrease density but increase density altitude.', 'Decrease density altitude.', 'Not affect density altitude.', 'Increase density but decrease density altitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_040',
      question: 'What will happen to the altimeter reading in a right sideslip, if an aircraft has static vent at each side of the\nfuselage, but the right one is blocked.',
      options: ['Over read.', 'Under read.', 'No change.', 'Depends on altitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_041',
      question: 'What will a cabin altimeter read with QFE set.',
      options: ['The same as with QNH set.', 'Height AGL.', 'Height above sea level.', 'Field elevation when on the runway.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_042',
      question: 'The altimeter of an aircraft with a static pressure source on each side of the fuselage will ……. If one becomes\nblocked?',
      options: ['Over read when side slipping.', 'Over read when side slipping towards the blocked source.', 'Over read when side slipping towards the clear source.', 'Under read when side slipping.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_043',
      question: 'A servo altimeter is …. It employs an electrical pick-off?',
      options: ['More accurate because …….', 'Less accurate because ……', 'Less reliable because ……', 'More reliable because …….'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_044',
      question: 'What will happen to the altimeter reading if an aircraft flying at a fixed heading meets a colder air mass?',
      options: ['Read less than true altitude.', 'Read more than true altitude.', 'Read zero.', 'Readings will not be affected.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_045',
      question: 'What is the true altitude of an aircraft flying at 16000 ft indicated altitude with an OAT of – 16 degrees C?',
      options: ['13200 ft.', '14200 ft.', '16050 ft.', '16200 ft.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_046',
      question: 'From where does the ADC obtain altitude data?',
      options: ['Radio Altimeter.', 'OAT sources.', 'Barometric altitude source.', 'Dynamic minus total pressure.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_047',
      question: 'True altitude is obtained from …… on board an aircraft?',
      options: ['Density altitude.', 'Temperature altitude.', 'Pressure altitude.', 'International standard altitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_048',
      question: 'What is density altitude?',
      options: ['Pressure altitude corrected for density.', 'Temperature altitude corrected for density.', 'Temperature altitude corrected for pressure.', 'Pressure altitude corrected for temperature.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_049',
      question: 'How will altimeter readings be affected if the layers of air below an aircraft are colder than the standard\ntemperature?',
      options: ['Read true altitude, only the air above matters.', 'Read zero.', 'Read high than true.', 'Read lower than true.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins02_050',
      question: 'How will altimeter reading be affected if the static vent pipe becomes blocked?',
      options: ['Read true altitude, only the air above matters', 'Readings will freeze.', 'Read higher than true.', 'Read lower than true. ASI'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins03: [
    {
      id: 'ins03_001',
      question: 'In case of static port blockage, the airspeed indicator:',
      options: ['Over reads in a climb and under reads in a descent.', 'Under reads in a descent only.', 'Under reads in a climb and over reads in a descent.', 'Over reads in a climb only.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_002',
      question: 'The alternate static source of a light non-pressurised aeroplane is located in the flight deck.\nWhen used :',
      options: ['The airspeed indicator tends to under read.', 'The airspeed indicator tends to over read.', 'It has no influence on airspeed indicator reading.', 'The airspeed indicator indicates a consistent decreasing speed.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_003',
      question: 'Given :\n\nPt = total pressure :\nPs = static pressure :\nPd = dynamic pressure :\n\nThe airspeed indicator measures :',
      options: ['Ps – Pt.', 'Pt – Pd.', 'Pd – Ps.', 'Pt – Ps.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_004',
      question: 'The limits of the green scale of an airspeed indicator of light propeller aircraft are :',
      options: ['VSI and VNO.', 'VSI and VMO.', 'VSO and VNE.', 'VSI and VNE.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_005',
      question: 'On the airspeed indicator of a win engine aeroplane, he blue radial line corresponds to :',
      options: ['Best single engine rate of climb.', 'Single engine holding speed.', 'Minimum ground control speed.', 'VNE.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_006',
      question: 'What does the “barber’s pole” used on some ASI’s indicate ?',
      options: ['M MO .', 'V NE .', 'TAS.', 'Temperature and V MO .'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_007',
      question: 'What speed is V NO ?',
      options: ['That which may only be exceeded with caution and in still air.', 'That which may never be exceeded.', 'That which may be exceeded only in emergencies.', 'The maximum at which fully control deflection is possible without overstressing the aircraft structure.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_008',
      question: 'From what is V MO calculated ?',
      options: ['TAS.', 'EAS.', 'CAS.', 'RAS.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_009',
      question: 'What will be the effect if the drain hole and pitot tapping in a pitot probe are blocked, whilst the static source\nremains open ?',
      options: ['The ASI will respond to changes in pressure altitude only.', 'The ASI will not respond.', 'The ASI will under read at all speeds.', 'The ASI will over read when accelerating, decelerating, climbing or descending.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_010',
      question: 'What do the upper and lower limits of the yellow are on an ASI represent?',
      options: ['V NE and V NO .', 'V NO and V NE .', 'V MO and V NE .', 'V NO and V MO .'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_011',
      question: 'If the pitot source and drain become blocked by ice when in cruise flight, how will the ASI respond when\ndescending?',
      options: ['It will under read.', 'It will over read.', 'It will read zero in all conditions.', 'It will remain fixed at the reading at which it became blocked.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_012',
      question: 'At msl in the ISA?',
      options: ['CAS = TAS.', 'IAS = TAS.', 'IAS = EAS.', 'CAS < TAS.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_013',
      question: 'In an ASI system, what does the pitot probe measure?',
      options: ['Total pressure.', 'Dynamic pressure.', 'Static pressure.', 'Ambient pressure.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_014',
      question: 'What does the blue line on a twin engine piston aircraft ASI indicate ?',
      options: ['V XSE .', 'V NO .', 'V NE .', 'V YSE .'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_015',
      question: 'What are indicated by the lower and upper ends of the white are on an ASI?',
      options: ['V S1 and V FE .', 'V S0 and V FE .', 'V FE and V FO .', 'V SE and V NE .'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_016',
      question: 'VFE is the ?',
      options: ['Maximum speed at which the aircraft is permitted to fly with is flaps extended.', 'Maximum speed at which the flaps can be extended or retracted.', 'The minimum speed for flaps up flight.', 'The maximum speed for flaps up flight.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_017',
      question: 'What will be the effect on the ASI if the pitot tube of an unpressurised aircraft is fractured and the pitot drain is\nblocked?',
      options: ['It will over read.', 'It will under read.', 'It will give a constant reading.', 'It will read zero at all speeds.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_018',
      question: 'At any given weight or altitude, an aircraft will always lift-off at the same?',
      options: ['CAS.', 'TAS.', 'Ground speed.', 'EAS.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_019',
      question: 'CAS is ?',
      options: ['EAS corrected for position error and compressibility error.', 'IAS corrected for position error and instrument error.', 'TAS corrected for instrument error and ram effect.', 'IAS corrected for density error and position error.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_020',
      question: 'When descending from FL400 and attempting to maintain maximum groundspeed, airspeed will be limited by?',
      options: ['V NE then V MO .', 'V NO then V NE .', 'M MO then V MO .', 'V MO then M MO .'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_021',
      question: 'What will happen to TAS when descending through an isothermal layer at constant CAS?',
      options: ['Decrease.', 'Increase.', 'Remain constant.', 'Decrease then increase.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_022',
      question: 'When descending through an inversion at constant TAS?',
      options: ['Mach number increases.', 'Mach number decreases.', 'Mach number remains constant.', 'CAS decreases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_023',
      question: 'When climbing through an inversion at constant TAS?',
      options: ['Mach number increases.', 'Mach number decreases.', 'Mach number remains constant.', 'CAS increases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_024',
      question: 'When descending through an in version at constant CAS?',
      options: ['TAS increases.', 'Mach number increases.', 'Mach number remains constant.', 'TAS decreases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_025',
      question: 'When climbing through an inversion at constant CAS?',
      options: ['TAS increases.', 'Mach number decreases.', 'Mach number remains constant.', 'TAS decreases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_026',
      question: 'When climbing through an inversion at constant mach number?',
      options: ['CAS increases.', 'TAS decreases.', 'TAS remains constant.', 'TAS increases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_027',
      question: 'When descending through an inversion at constant mach number?',
      options: ['TAS increases.', 'TAS decreases.', 'TAS remains constant.', 'CAS decreases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_028',
      question: 'When climbing through an inversion at constant mach number?',
      options: ['CAS increases.', 'LSS decreases.', 'TAS remains constant.', 'TAS increases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_029',
      question: 'When descending through an inversion at constant mach number?',
      options: ['CAS decreases.', 'LSS increases.', 'LSS remains constant.', 'TAS decreases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_030',
      question: 'When climbing through an inversion at constant CAS?',
      options: ['TAS increases.', 'TAS decreases.', 'TAS remains constant.', 'Mach number decreases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_031',
      question: 'When descending through an inversion at constant CAS?',
      options: ['TAS increases.', 'TAS decreases.', 'TAS remains constant.', 'Mach number increases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_032',
      question: 'When descending through an isothermal layer at constant TAS?',
      options: ['Mach number increases.', 'Mach number decreases.', 'Mach number remains constant.', 'CAS decreases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_033',
      question: 'When climbing through an isothermal layer at constant TAS?',
      options: ['Mach number increases.', 'Mach number decreases.', 'Mach number remains constant.', 'CAS decreases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_034',
      question: 'When descending through an isothermal layer at constant CAS?',
      options: ['Mach number increases.', 'Mach number decreases.', 'Mach number remains constant.', 'TAS increases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_035',
      question: 'When climbing through an isothermal layer at constant CAS?',
      options: ['Mach number increases.', 'Mach number decreases.', 'Mach number remains constant.', 'TAS decreases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_036',
      question: 'When climbing through an isothermal layer at constant mach number?',
      options: ['TAS increases.', 'TAS decreases.', 'TAS remains constant.', 'CAS increases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_037',
      question: 'When descending through an isothermal layer at constant mach number?',
      options: ['TAS increases.', 'TAS decreases.', 'TAS remains constant.', 'CAS increases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_038',
      question: 'When climbing through an isothermal layer at constant mach number?',
      options: ['CAS increases.', 'CAS decreases.', 'CAS remains constant.', 'TAS decreases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_039',
      question: 'When descending through an isothermal layer at constant CAS?',
      options: ['LSS increases.', 'LSS decreases.', 'LSS remains constant.', 'TAS increases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_040',
      question: 'When climbing through an isothermal layer at constant CAS?',
      options: ['TAS increases.', 'TAS decreases.', 'TAS remains constant.', 'Mach number decreases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_041',
      question: 'When descending through an isothermal layer at constant CAS?',
      options: ['TAS increases.', 'TAS decreases.', 'TAS remains constant.', 'Mach number increases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_042',
      question: 'If pressure remains constant as temperature increases ?',
      options: ['Density will increase, causing the CAS : TAS ratio to increase.', 'Density will increase, causing the CAS : TAS ratio to decrease.', 'Density will decrease, causing the CAS : TAS ratio to increase.', 'Density will decrease, causing the CAS : TAS ratio to decrease.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_043',
      question: 'If the pitot pipe becomes partly blocked?',
      options: ['The IAS reading will be too low when climbing.', 'The IAS reading will be too low when descending.', 'The IAS reading will be too low at all times.', 'The IAS reading will be too low when descending and too high when climbing.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_044',
      question: 'If the pitot pipe becomes partly blocked?',
      options: ['The IAS will be too high when descending.', 'The IAS will be too high when accelerating.', 'The IAS will be too low at all times.', 'The IAS will be too low when accelerating.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_045',
      question: 'If the static pipe becomes partly blocked?',
      options: ['The IAS and ROC will be too low when climbing.', 'The IAS and ROC will be too low when descending.', 'The IAS and ROC will be too low at all times.', 'The IAS will be too low when descending and too high when climbing.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_046',
      question: 'If the static pipe become partly blocked?',
      options: ['The IAS will be too high when descending at constant IAS.', 'The IAS will be too high when accelerating at constant altitude.', 'The IAS will be too low at all times.', 'The IAS will be too low when accelerating at constant altitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_047',
      question: 'If the pitot pipe becomes partly blocked?',
      options: ['The ASI will over read and the error will be greater when climbing at constant CAS than when climbing at constant TAS.', 'The ASI will over read and the error will be greater when climbing at constant TAS than when climbing at constant CAS.', 'The ASI will under read and the error will be greater when climbing at constant CAS than when climbing at constant TAS.', 'The ASI will under read and the error will be greater when climbing at constant TAS then when climbing at constant CAS.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_048',
      question: 'CAS is IAS corrected for?',
      options: ['Position error.', 'Instrument error.', 'Compressibility error.', 'Temperature error.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_049',
      question: 'What does the white are on an ASI indicate?',
      options: ['V S0 at the lower end and V FE at the upper end.', 'V S0 at the lower end and V FO at the upper end.', 'V S1 at the lower end and V FE at the upper end.', 'V S1 at the lower end and V FO at the upper end.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins03_050',
      question: 'If the pitot source becomes blocked while the static source remains open, an ASI will?',
      options: ['Under read at all speeds.', 'Over read at all speeds.', 'Read zero at all speeds.', 'Give an indication proportional to altitude. ATTITUDE'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins04: [
    {
      id: 'ins04_001',
      question: 'How many degrees of freedom and what is the spin axis of an attitude indicator?',
      options: ['Local earth vertical two degrees of freedom.', 'Aircraft lateral axis two degrees of freedom.', 'Aircraft horizontal axis one degrees of freedom.', 'Aircraft longitudinal axis three degrees of freedom.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins04_002',
      question: 'What would be the indication on an attitude indicator in a right turn?',
      options: ['Climb due to pendulous vanes.', 'No climb.', 'Descent due to pendulous vanes.', 'Correct pitch and bank at all times.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins04_003',
      question: 'What will a classic artificial horizon indicate when turning through 90 degrees at constant attitude and bank\nangle?',
      options: ['Correct bank angle and attitude.', 'Too much bank and too much nose up attitude.', 'Too little bank and too little nose up attitude.', 'Too little bank and too much nose up attitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins04_004',
      question: 'An AI has?',
      options: ['One degree of freedom and a lateral spin axis.', 'Two degrees of freedom and a horizontal spin axis.', 'Two degrees of freedom and a horizontal spin axis.', 'One degree of freedom and a vertical spin axis.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins04_005',
      question: 'How will a basic AI respond if an aircraft performs a 270 degree turn at constant bank angle and ROT?',
      options: ['Nose up and bank.', 'Nose down and bank.', 'Nose level and bank.', 'Correct bank and pitch.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins04_006',
      question: 'Aircraft attitude is indicated on?',
      options: ['EICAS/ECAM primary display.', 'EFIS ND.', 'EFIS PFD.', 'All of the above.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins04_007',
      question: 'When turning through 90° at constant AOB and pitch attitude, what will a classic artificial horizon indicate?',
      options: ['Too much nose up and too little bank angle.', 'Too much nose up and too much bank angle.', 'Too little nose up and too little bank angle.', 'Too little nose up and too much bank angle.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins04_008',
      question: 'When turning through 270° at constant AOB and pitch attitude, what will a classic artificial horizon indicate?',
      options: ['Too much nose up and too little bank angle.', 'Too much nose up and too much bank angle.', 'Too little nose up and too little bank angle.', 'Too little nose up and too much bank angle.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins04_009',
      question: 'An artificial horizon has?',
      options: ['Two degrees of freedom and a vertical spin axis.', 'Two degrees of freedom and a longitudinal spin axis.', 'Two degrees of freedom and a lateral spin axis.', 'No degrees of freedom because it is earth tied.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins04_010',
      question: 'The latitude nut ……… an artificial horizon?',
      options: ['Compensates for transport error.', 'Is not fitted to.', 'Compensates for latitude error.', 'Compensates for earth rate errors.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins04_011',
      question: 'The gravity sensing unit in an artificial horizon is used to?',
      options: ['Prevent tilting of the gyro.', 'Prevent precession of the gyro.', 'Erect the gyro.', 'Provide signals to the autopilot.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins04_012',
      question: 'Classic artificial horizon indications turning through 180° at constant AOB?',
      options: ['Nose up and AOB too low.', 'Nose up and AOB too high.', 'Nose up and correct AOB.', 'Pitch attitude and AOB correct.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins04_013',
      question: 'An artificial horizon has ….. degrees of freedom in the ……… axis?',
      options: ['Two vertical.', 'Two horizontal.', 'One vertical.', 'One horizontal.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins04_014',
      question: 'Which or the following properties are possessed by a standby artificial horizon?\n\n 1. Independent power supply.\n 2. Integral gyro.\n 3. Remote (external) gyro.\n 4. Used only in emergencies.\n 5. At least one per pilot in JAR 25 aircraft.',
      options: ['1, 2.', '2, 3.', '3, 4.', '4, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins04_015',
      question: 'If an aircraft turns through 270° at a constant rate of turn and AOB, the indications on its classic artificial\nhorizon will be?',
      options: ['Bank left nose up.', 'Ban right nose up.', 'Wings level nose up.', 'AOB and pitch attitude correct. AUTOFLIGHT'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins05: [
    {
      id: 'ins05_001',
      question: 'The yaw damper system acts on :',
      options: ['The rudder without moving the rudder pedals.', 'The rudder, simultaneously moving the rudder pedals.', 'The ailerons, instantaneously moving the roll trim.', 'The ailerons, without moving the roll trim.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_002',
      question: 'The vertical flight path modes of an autopilot are :\n\n 1. Pitch attitude hold.\n 2. Altitude hold.\n 3. Track hold.\n 4. Glide slope intercept and track.\n\nThe combination that regroups all of the correct statements is :',
      options: ['2, 4.', '1, 2, 3.', '1,', '1, 2, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_003',
      question: 'The later flight path modes of an autopilot system are ;\n\n 1. Heading hold.\n 2. Speed hold.\n 3. FMS lateral navigation.\n 4. TAS hold.\n 5. Localizer intercept and track.\n\nThe combination regrouping all of the correct statements is :',
      options: ['2, 5.', '1, 3, 5.', '1, 2, 3, 5.', '1, 3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_004',
      question: 'In an autopilot system, the flight path modes are ;\n\n 1. Pitch attitude hold.\n 2. IAS and Mach number hold.\n 3. Altitude hold.\n 4. Glide slope intercept and track.\n\nThe combination regrouping all of the correct statements is ;',
      options: ['4', '1, 2, 3, 4.', '3', '2, 3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_005',
      question: 'The lateral flight path modes of an autopilot system are :\n\n 1. Speed hold.\n 2. Localizer intercept track.\n 3. Track hold.\n 4. FMS lateral navigation.\n 5. Pitch attitude hold.\n\nThe combination regrouping all of the correct statements is :',
      options: ['2, 3, 4.', '1, 2, 3, 4.', '1, 3, 5.', '2, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_006',
      question: 'The yaw damper system acts on :',
      options: ['The rudder and the roll trim if necessary.', 'The rudder and the ailerons if necessary.', 'The rudder only.', 'The rudder and speed brakes.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_007',
      question: 'A flight control system is fail-passive if, in the event of a failure :',
      options: ['The system operates as a fail-operational system.', 'The system operate as a hybrid fail operational system.', 'There is no significant out of trim condition or deviation of flight path or attitude but the landing is not completed automatically.', 'There is no significant out of trim condition or deviation of flight path or attitude but the landing is completed automatically.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_008',
      question: 'The purpose of the autopilot Control Wheel Steering (CWS) mode is :',
      options: ['To consider as target parameters, the current pitch and roll angles at the time the mode becomes active.', 'To capture and hold the altitude selected with the control wheel on the mode control panel.', 'To control the nose wheel steering during low visibility take-off and landing.', 'To control the nose wheel steering during automatic landings.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_009',
      question: 'The components of an autopilot system are the :\n\n 1. Actuators.\n 2. Mode control panel.\n 3. Mode annunciator panel.\n 4. Computer.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 2, 3, 4.', '1, 2.', '1, 4.', '1, 2, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_010',
      question: 'The FADE (Full Authority Digital Engine Control) provides:\n\n 1. Engine automatic shut-down if maximum N1 is exceeded.\n 2. Engine automatic shut-down if maximum EGT is exceeded.\n 3. Automatic thrust rating control.\n 4. Fully automatic engine starting.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 3.', '2, 3, 4.', '1, 3, 4.', '3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_011',
      question: 'When cruising, the autothrottle system can be engaged in the following mode(s) holding constant :\n\n 1. TAS.\n 2. IAS.\n 3. Mach number.\n\nThe combination regrouping all of the correct statements is :',
      options: ['1, 2, 3.', '2,', '1, 2.', '2, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_012',
      question: 'The auto-throttle:\n\n 1. Can capture and maintain the N1 RPM.\n 2. Can capture and maintain the N2 RPM.\n 3. Can capture and maintain an IAS.\n 4. Is always engaged automatically at the same time as the autopilot.\n\nThe combination that regroups all of the correct statements is :',
      options: ['2, 3.', '1, 4.', '1, 3.', '1, 3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_013',
      question: 'Concerning a fail-passive flight control system, in the event of a failure :\n\n 1. There may be a significant deviation of flight path or attitude.\n 2. There is no significant deviation of flight path or attitude.\n 3. There is no significant out of trim condition.\n 4. There may be a significant out of trim condition.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 3.', '2, 3.', '1, 4.', '2, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_014',
      question: 'Concerning a fail-passive flight control system, in the event of a failure :\n\n 1. There may be a significant deviation of flight path or attitude.\n 2. There is no significant deviation of flight path or attitude.\n 3. The landing is not completed automatically,\n 4. The landing is completed automatically.\n\nThe combination that regroups all of the correct statements is :',
      options: ['2, 3.', '2,, 4.', '1, 3.', '1, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_015',
      question: 'The CS25 gives the following definition : “Where the pilot has the ability to make inputs to the autopilot by\nmovement of the normal control wheel”. The corresponding mode is :',
      options: ['Control Wheel Steering (CWS).', 'Nose Wheel Steering (NWS).', 'Automatic Wheel Steering (AWS).', 'Alternate Wheel Steering (AWS).'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_016',
      question: 'An aircraft is in a steady right turn, with not enough right rudder (slipping turn). The yaw damper will:',
      options: ['Acts on the right rudder pedal to provide a balanced turn.', 'Acts only in case of skidding turns (turn with not enough bank).', 'Acts on the left rudder pedal to provide a balanced turn.', 'Is not designed to provide a balanced turn.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_017',
      question: 'An aircraft is in a steady left turn, with too much left rudder (skidding). The yaw damper will :',
      options: ['Acts only in case of skidding turns (turn with not enough bank).', 'Acts on the left rudder pedal to provide a balanced turn.', 'Is not designed to provide a balanced turn.', 'Acts on the right rudder pedal to provide a balanced turn.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_018',
      question: 'According to CS25, the definition of the control wheel steering made (CWS) is : “Where the pilot has the ability\nto make inputs to the” :',
      options: ['Automatic pilot by movement of the normal control wheel.', 'Flight director by movement of the normal control wheel.', 'Automatic pilot by movement of the alternate control wheel.', 'Flight director by movement of the alternate control wheel.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_019',
      question: 'When engaging the autopilot, the function providing a smooth take-over is the :',
      options: ['Automatic CWS (Control Wheel Steering) function.', 'Automatic synchronization function.', 'Automatic pitch trim function.', 'Mach trim function.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_020',
      question: 'When disengaging the autopilot, the function providing a smooth take-over is the ;',
      options: ['Automatic synchronization function.', 'Mach trim function.', 'Automatic CWS (Control Wheel Steering) function.', 'Automatic pitch trim function.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_021',
      question: 'During an auto-coupled ILS approach followed by an automatic landing, the guidance signals in the vertical\nplane under 200 ft are computed according to :',
      options: ['Radio altitude.', 'Barometric altitude with the altimeter set to the QNH.', 'Barometric altitude with the altimeter set to the QFE.', 'Barometric altitude with the altimeter set to the 1013.25.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_022',
      question: 'The commands sent out by the yaw damper computer :',
      options: ['Inhibit the rudder pedal deflection orders sent out by the pilot or autopilot.', 'Are added to or subtracted from the rudder pedal deflection orders sent out by the pilot or autopilot.', 'Are inhibited when the autopilot is engaged.', 'Are inhibited when the pilot acts on the rudder pedals.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_023',
      question: 'When the yaw damper system sends motion orders to the rudder :',
      options: ['A feedback is provided to the rudder pedals and rudder trim.', 'A feedback is provided to the rudder trim only.', 'No feedback is provided to the rudder pedals.', 'A feedback is provided to the rudder pedals only.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_024',
      question: 'For a FMS designed with lateral navigation (LNAV) capability coupled to the autopilot, the FMS lateral\ncommand output is :',
      options: ['A roll angle or a heading target.', 'A calibrated airspeed (CAS) and a cross track distance (XTK).', 'A lateral acceleration.', 'A longitudinal acceleration and a roll rate.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_025',
      question: 'The computer of the autopilot system uses, among others, the following parameters :',
      options: ['CAS, Altitude, vertical speed, heading, attitude.', 'Altitude, vertical speed, heading, attitude, GPS position.', 'Altitude, heading, temperature, fuel flow, attitude.', 'CAS, altitude, temperature, inertial position, attitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_026',
      question: 'In the event of a failure, a fail-operational flight control system will operate as a :',
      options: ['Fail operational hybrid system. ‘', 'Fail-redundant system.', 'Fail-passive system.', 'Fail – safe system.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_027',
      question: 'When engaged in the pitch hold mode, the autopilot uses data issued by the :',
      options: ['Inertial seed indicator.', 'Flight management computer (FMC).', 'Attitude reference system.', 'ADC.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_028',
      question: 'Consider a modern thrust computer, during a steady climb:',
      options: ['N1 and N2 remain constant.', 'N2 is automatically adjusted as the aircraft climbs, and N1 remains constant.', 'N1 is automatically adjusted as the aircraft climbs, and N2 remains constant.', 'N1 is automatically adjusted as the aircraft climbs.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_029',
      question: 'The autothrottle system:',
      options: ['Can be used for take-off.', 'Can be engaged in the GS mode, holding of constant ground speed, during final approach.', 'Can be engaged in the TAS mode, holding of constant TAS, during final approach.', 'Is automatically disconnected on the ground.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_030',
      question: 'During a manual ILS final approach, the auto throttle :',
      options: ['Is not available.', 'Cannot be engaged because the autopilot is not engaged.', 'Can be operated in the N1 (EPR) mode (holding N1 or EPR).', 'Can be operated in the SPEED mode (holding IAS).'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_031',
      question: 'During an automatic ILS final approach, the auto throttle :',
      options: ['Can be operated in the SPEED mode (holding IAS).', 'Is not available.', 'Can be operated in the SPEED mode (holding IAS), or in the N1/EPR mode (holding N1 or EPR)', 'Can be operated in the N1 (EPR) mode (holding N1 or EPR).'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_032',
      question: 'During a climb with the autopilot engaged in the V/S mode (holding of vertical speed) the auto-throttle;',
      options: ['Can be operated in the SPEED mode (holding IAS).', 'Is not available.', 'Can be operated in the SPEED ode (holding IAS), or in the N1/EPR mode (holding N1 or EPR(.', 'Can be operated in the N1 (EPR) mode (holding N1 or EPR).'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_033',
      question: 'The FADEC (Full Authority Digital Engine Control) provides:\n\n 1. Provides fully automated engine starting.\n 2. Modifies aircraft airspeed in order to allow for the lowest fuel consumption.\n 3. Counters any yaw moment in case of an engine failure.\n 4. Provides thrust reverser control.\n\nThe combination that regroups all of the correct statements is.',
      options: ['1, 2, 3, 4.', '2,', '1, 2, 4.', '1, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_034',
      question: 'In an autopilot system, the basic stabilization modes are :\n\n 1. Altitude hold.\n 2. Pitch attitude hold.\n 3. Roll attitude hold.\n 4. IAS hold.\n\nThe combination that regroups all of the correct statements is ;',
      options: ['2, 3, 4.', '1,', '1, 2, 3.', '2, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_035',
      question: 'The yaw damper system sends a motion order to the rudder if the yawing rate of the aircraft :',
      options: ['Is < 1 only.', 'Is < 1 only.', 'Is not constant.', 'Is constant.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_035_2',
      question: 'Concerning a fail-operational flight control system, in the event of a failure:\n\n 1. The system will operate as a fail passive system.\n 2. The landing is not completed automatically.\n 3. The landing is completed automatically.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 3.', '1, 2.', '2.', '3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_037',
      question: 'In an autopilot system, the functions consisting of controlling the movements around the centre of gravity of the\naircraft is provided by the:',
      options: ['Inner loop systems.', 'Outer loop systems.', 'Synchronization systems.', 'Flight management systems (FMS).'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_038',
      question: 'In an autopilot system, the functions consisting of controlling the path of the aircraft are :',
      options: ['Stability functions.', 'Guidance functions.', 'Attitude functions.', 'Inner loop functions.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_039',
      question: 'A flight control system is fail-operational if, in the event of a failure :',
      options: ['There is no significant out of trim condition or deviation of flight path or attitude, but the landing is not completed automatically.', 'The approach, flare and landing can be completed automatically.', 'The approach, only can be completed automatically.', 'The landing is not completed automatically.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_040',
      question: 'In an autopilot system :',
      options: ['The inner loop provides the guidance functions.', 'The inner loop provides the stability functions and the outer loop provides the guidance functions.', 'The outer loop provides the stability functions and the inner loop provides the guidance functions.', 'The outer loop provides the stability functions.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_041',
      question: 'The yaw damper system is operative :',
      options: ['During manual or automatic flight.', 'Only if the flight director is engaged.', 'Only if the autopilot is engaged.', 'Only when flying manually.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_042',
      question: 'The position of the command bars of the flight director enable the pilot to know:',
      options: ['The direction and amplitude of the corrections to apply to the controls.', 'The position of the aircraft.', 'The attitude of the aircraft.', 'Only the direction of the corrections to apply to the controls.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_043',
      question: 'The components of an autopilot system are the ;\n\n 1. Actuators.\n 2. Mode control panel.\n 3. EFIS control panel.\n 4. Mode annunciator panel.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 2, 3, 4.', '1, 2, 3.', '1, 2, 4.', '3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_044',
      question: 'The computer of the autopilot system uses, among others, input signals from the :\n\n 1. Attitude reference system.\n 2. Mode annunciator panel.\n 3. ADC.\n 4. Mode control panel.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 4.', '1, 2, 3, 4.', '2, 3.', '1, 3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_045',
      question: 'The purpose of Auto Trim function in autopilot is to?',
      options: ['Tell the pilot when elevator trimming is required.', 'Help Auto Pilot to compensate for crosswind influence.', 'Trim throttles to obtain smooth engine power variation.', 'Control elevator trim tab in order to relieve elevator load.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_046',
      question: 'The purpose of Auto Throttle is?',
      options: ['Automatic shut down of one engine at too high temperature.', 'To deactivate manual throttles and transfer engine control to Auto Pilot.', 'To synchronize engines to avoid “yawing”.', 'To maintain constant engine power or airplane speed.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_047',
      question: 'In order to know in which mode the auto-throttles are engaged, the crew will check the?',
      options: ['ND (Navigation Display).', 'TCC (Thrust Control Computer).', 'Throttles position.', 'PFD (Primary Flight Display).'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_048',
      question: 'Mode “Localizer ARM” active on Flight Director means?',
      options: ['Localizer ALARM, making localizer approach not authorized.', 'Coupling has occurred and system provides control data to capture the centreline.', 'Localizer is armed and coupling will occur when flag warning disappears.', 'System is armed for localizer approach and coupling will occur upon capturing centre line.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_049',
      question: 'The Altitude Select System?',
      options: ['Disengages autopilot Auto Trim at selected altitude.', 'Is annunciated by light and/or sound when airplane is approaching selected altitude.', 'Illuminates a light when selected altitude is attained.', 'Engages autopilot Auto Trim at selected altitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_050',
      question: 'The correction of the control surface deflection made by the automatic pilot calculator in order to stabilize the\nlongitudinal attitude will be all the more significant as the?\n\n 1. Difference between the reference attitude and the instantaneous attitude is high.\n 2. Rate of change of the difference between the reference attitude and the instantaneous attitude is high.\n 3. Temperature is low.\n 4. Pressure altitude is high.\n\nThe combination regrouping all the correct statements is?',
      options: ['1, 2.', '1, 2, 3, 4.', '1, 2, 3.', '2, 3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_051',
      question: 'The correction of the control surface deflection made by the auto-pilot calculator in order to keep a given\naltitude will be all the more significant when the?\n\n 1. Difference between the attitude necessary to keep the given or reference altitude and the instantaneous\n attitude is high.\n 2. Variation speed of the difference between the attitude necessary to maintain the altitude and the\n instantaneous attitude is high.\n 3. Difference between the altitude of reference and the instantaneous altitude is high.\n 4. Variation speed of the difference between the reference altitude and the instantaneous altitude is high.\n\nThe combination regrouping the correct statement is ?',
      options: ['1, 2 3 and 4.', '1 and 2,', '3 and 4.', '1, 2 and 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_052',
      question: 'An automatic landing is carried out when the automatic pilot?',
      options: ['And the auto-throttle ensure a correct final approach, at least up to ground roll.', 'Ensures a correct final approach, at least up to ground roll while human pilot controls the power.', 'And the auto-throttle ensure a correct final approach, at least up to flare-out.', 'And the auto-throttle ensure a correct final approach, at least up to flare-out while the human pilot controls the power.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_053',
      question: 'A pilot has to carry out a single-pilot IFR flight on a light twin-engined aircraft for cargo transport. The purpose\nof the automatic pilot is at least to hold the?',
      options: ['Heading.', 'Altitude.', 'Heading, to hold the altitude and to have a radio axis tracking function.', 'Heading and to hold the altitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_054',
      question: 'The block diagram of an autopilot is shown below.\n\nFor each control channel (pitch, roll and yaw) the piloting law is the relationship between the deflection of the\ncontrol surface commanded by the computer (BETA c) and the?',
      options: ['Real deflection of the control surface (BETA control surface feedback).', 'Offset EPSILON at the computer input.', 'Pilot command E.', 'Aircraft response S.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_055',
      question: 'In the automatic trim control system of an autopilot, automatic trimming is normally effected about the?',
      options: ['Pitch axis only.', 'Roll and yaw axes only.', 'Pitch roll and yaw axes.', 'Pitch and roll axes only.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_056',
      question: 'A closed loop control system in which a small power input controls a much larger power output in a strictly\nproportionate manner is known as?',
      options: ['An amplifier.', 'A feedback control circuit.', 'An autopilot.', 'A servomechanism.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_057',
      question: 'Mach Trim is a device to compensate for?',
      options: ['Weight reduction resulting from fuel consumption during the cruise.', 'Backing of the aerodynamic centre at high Mach numbers by moving the elevator to nose – up.', 'The effects of fuel transfer between the main tanks and the tank located in the horizontal tail.', 'The effects of temperature variation during a climb or descent at constant Mach.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_058',
      question: 'Which one of the following statements is true with regard to the operation of a Mach trim system?',
      options: ['It only operates above a pre-determined Mach number.', 'It operates to counteract the larger than normal forward movements of the wing centre of pressure at high subsonic airspeeds.', 'It only operates when the autopilot is engaged.', 'It operates over the full aircraft speed range.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_059',
      question: 'A landing will be considered to be performed in the SEMI-AUTOMATIC mode when?\n\n 1. The autopilot maintains the airplane on the ILS beam until the decision height is reached then is\n disengaged automatically.\n 2. The auto-throttle maintains a constant speed until the decision height is reached then is disengaged\n automatically.\n 3. The autopilot maintains the airplane on the ILS beam until the flare.\n 4. The auto-throttle decreases the thrust when the height is approximately 30 ft.\n 5. The flare and the ground roll are performed automatically.\n\nThe combination regrouping all the correct statements is ?',
      options: ['3, 4 and 5.', '1 and 4', '2, 3 and 5.', '1 and 2.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_060',
      question: 'When using the autopilot, the function of the pitch channel automatic trim is to?\n\n 1. Cancel the hinge moment of the elevator.\n 2. Ease as much as possible the load of the servo-actuators.\n 3. Restore to the pilot a correctly trimmed airplane during the autopilot disengagement.\n\nThe combination regrouping all the correct statements is?',
      options: ['1 and 2.', '1, 2 and 3.', '3.', '1 and 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_061',
      question: 'Among the following functions of an autopilot, those related to the airplane guidance care?\n\n 1. Pitch attitude holding.\n 2. Horizontal wing holding.\n 3. Indicated airspeed or Match number holding.\n 4. Altitude holding.\n 5. VOR axis holding.\n 6. Yaw damping.\n\nThe combination regrouping all the correct statement is?',
      options: ['1, 3, 4 and 5.', '3, 4 and 5.', '1, 2, and 6.', '1, 2, 3 and 6.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_062',
      question: 'Among the following functions of an autopilot, those related to the airplane stabilization are?\n\n 1. Pitch attitude holding.\n 2. Horizontal wing holding.\n 3. Displayed heading or inertial track holding.\n 4. Indicated airspeed or Mach number holding.\n 5. Yaw damping.\n 6. VOR axis holding.\n\nThe combination regrouping all the correct statements is?',
      options: ['2, 4, and 5.', '1, 2 and 5.', '1, 2, 3 and 6.', '3, 4, 5 and 6.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_063',
      question: 'The interception of a localizer beam by the autopilot takes place?',
      options: ['According to an interception versus radio deviation law.', 'According to an interception versus range and angular speed law.', 'At a constant heading.', 'At a constant magnetic course.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_064',
      question: 'The yaw damper, which suppresses Dutch roll?',
      options: ['Controls the ailerons, with the angular rate about the vertical axis as the input signal.', 'Controls the rudder, with the angular rate about the vertical axis as the input signal.', 'Controls the ailerons, with Mach Number as the input signal.', 'Controls the rudder, with Mach Number as the input signal.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_065',
      question: 'Landing shall be considered as having been carried out automatically when the autopilot and the auto-throttle of\nan aircraft are disengaged by flight crew?',
      options: ['At the outer marker.', 'During ground roll.', 'During the flare.', 'At the decision height.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_066',
      question: 'The yaw damper indicator supplies the pilot with information regarding the?',
      options: ['Yaw damper action on the rudder.', 'Rudder displacement by the rudder pedals.', 'Yaw damper action only on the ground.', 'Rudder position.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_067',
      question: 'An airplane is in steady cruise at flight level 290. The auto-throttle maintains a constant Mach number. If the\ntotal temperature increases, the calibrated airspeed?',
      options: ['Decreases.', 'Increases if the static temperature is higher than the standard temperature, decreases if lower.', 'Remains constant.', 'Increases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_068',
      question: 'The calibrated airspeed (CAS) or Mach holding mode is carried out by:\n\n 1. The autopilot pitch channel in the climb mode at a constant calibrated airspeed (CAS) or Mach number.\n 2. The auto-throttles in the climb mode at a constant calibrated airspeed (CAS) or Mach number.\n 3. The autopilot pitch channel in the altitude or glide path holding mode.\n 4. The auto-throttles in the altitude or glide path holding mode.\n\nThe combination regrouping all the correct statements is?',
      options: ['2 and 4.', '1 and 3.', '2 and 3.', '1 and 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_069',
      question: 'When an automatic landing is interrupted by a go-around:\n\n 1. The auto-throttle reacts immediately upon the pilot action on the TO/GA (Takeoff/Go-around) switch\n in order to recover the maximum thrust.\n 2. The autopilot monitors the climb and the rotation of the airplane.\n 3. The autopilot retracts the landing gear and reduces the flap deflection in order to reduce the drag.\n 4. The pilot performs the climb and the rotation of the airplane.\n 5. The pilot retracts the landing gear and reduces the flap deflection in order to reduce the drag.\n\nThe combination regrouping all the correct statements is?',
      options: ['1, 3 and 4.', '1, 2 and 3.', '1, 2 and 5.', '1, 4 and 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_070',
      question: 'A landing will be considered to be performed in the AUTOMATIC mode when:\n\n 1. The autopilot maintains the airplane on the ILS beam until the decision height is reached then is\n disengaged automatically.\n 2. The auto-throttle maintains a constant speed until the decision height is reached then is disengaged\n automatically.\n 3. The autopilot maintains the airplane on the ILS beam until the flare.\n 4. The auto-throttle deceases thrust when the height is approximately 30 ft.\n 5. The flare and the ground roll are performed automatically.\n\nThe combination regrouping all the correct statements is?',
      options: ['1 and 2.', '2, 3 and 5', '1 and 4.', '3, 4 and 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_071',
      question: 'An autopilot capable of holding at least altitude and heading mode is compulsory?',
      options: ['For IFR or night flights with only one pilot.', 'On multi-pilot airplanes.', 'For VFR and IFR flights with only one pilot.', 'On airplanes over 5.7 t.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_072',
      question: 'The automatic power control system (auto-throttle) of a transport airplane has the following mode(s):\n\n 1. Capture and holding of speeds.\n 2. Capture and holding of Mach number.\n 3. Capture and holding of flight angle of attack.\n 4. Capture and holding of N1 or EPR (Engine Power Ratio).\n 5. Capture and holding of flight paths.\n\nThe combination regrouping all the correct statements is?',
      options: ['1, 2, 4.', '1, 2, 3, 5.', '2, 4.', '1, 4, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_073',
      question: 'From a flight mechanics point of view, the “guidance” functions of a transport airplane autopilot consist in?',
      options: ['Stabilizing and monitoring the movements around the aerodynamic centre.', 'Monitoring the movements of the centre of gravity in the three dimensions of space (path).', 'Stabilizing and monitoring the movements around the centre of gravity.', 'Monitoring the movements of the aerodynamic centre in the three dimensions of space (path).'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_074',
      question: 'The functions of an autopilot (basic modes) consist of?',
      options: ['Guiding the airplane path.', 'Stabilizing and monitoring the movement around the airplane aerodynamic centre.', 'Stabilizing and monitoring the movement around the airplane centre of gravity.', 'Monitoring the movement of the airplane centre of gravity.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_075',
      question: 'A pilot engages the control wheel steering (CWS) of a conventional autopilot and carries out a manoeuvre in\nroll. When the control wheel is released, the autopilot will?',
      options: ['Restore the flight attitude and the rate of turn selected on the autopilot control display unit.', 'Maintain the flight attitude obtained at that moment.', 'Roll wings level and maintain the heading obtained at that moment.', 'Maintain the track and the flight attitude obtained at that moment.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_076',
      question: 'During a Category II automatic approach, the height information is supplied by the?',
      options: ['Altimeter.', 'Radio altimeter.', 'GPS (Global Positioning System).', 'Encoding altimeter.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_077',
      question: 'The purpose of an airplane automatic trim system is to trim out the hinge moment of the?',
      options: ['Rudder(s).', 'Elevator(s) and rudder(s).', 'Elevator(s), rudder(s) and ailerons.', 'Elevator(s).'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_078',
      question: 'An automatic pilot is a system which can ensure the functions of?',
      options: ['Piloting from take-off to landing without any action from the human pilot.', 'Piloting and guidance of an aircraft in both the horizontal and vertical planes.', 'Piloting only.', 'Navigation.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_079',
      question: 'When being engaged, without selecting a particular mode, an automatic pilot enables?',
      options: ['A constant speed on track, wings horizontal.', 'All aeroplane piloting and guidance functions except maintain radio-navigation course lines.', 'Aeroplane stabilization with attitude hold or maintaining vertical speed and possibly automatic trim.', 'Aeroplane piloting and guidance functions.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_080',
      question: 'On an autopilot coupled approach, GO AROUND mode is engaged?',
      options: ['By the pilot pushing a button located on the throttles.', 'By the pilot selecting G.A. mode on the thrust computer control panel.', 'Automatically in case of an autopilot or flight director alarm.', 'If the aircraft reaches the decision height selected on the radio altimeter at a higher speed than the one selected.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_081',
      question: 'In a transport airplane, an autopilot comprises, in addition to the mode display devices, the following\nfundamental elements :\n\n 1. Airflow valve.\n 2. Sensors.\n 3. Comparators.\n 4. Computers.\n 5. Amplifiers.\n 6. Servo-actuators.\n\nThe combination regrouping all the correct statements is?',
      options: ['1, 3, 4, 6.', '1, 2, 6.', '2, 3, 4, 5, 6.', '2, 3, 4, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_082',
      question: 'The engagement of an autopilot is not possible when:\n\n 1. There is a fault in the electrical power supply.\n 2. The controlled – turn knob is not set to centre-off.\n 3. There is a synchronization fault in the pitch channel.\n 4. There is a fault in the attitude reference unit.\n\nThe combination regrouping all the correct statements is ?',
      options: ['1, 2, 4.', '2, 3, 4.', '1, 3, 4.', '1, 2, 3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_083',
      question: 'The purpose of the automatic trim is to :\n\n 1. Reduce to zero the hinge moment of the entire control surface in order to relive the load on the servo-\n actuator.\n 2. Ensure the aeroplane is properly trimmed when the autopilot is disengaged.\n 3. Maintain the same stability/maneuverability trade-off within the whole flight envelope.\n\nThe combination regrouping all the correct statements is?',
      options: ['1, 3.', '2, 3.', '1, 2, 3.', '1, 2.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_084',
      question: 'In automatic landing mode, in case of failure of one of the two autopilots, the system is considered?',
      options: ['“Fail soft” with minimized failure effect.', '“Fail passive” or without failure effect but with disconnection.', '“Fail survival” or without failure effect with function always ensured.', '“Fail hard” or without failure effect and disconnection.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_085',
      question: 'In automatic landing mode, when the 2 autopilots are used, the system is considered?',
      options: ['“Fail survival” or without failure effect with function always ensured.', '“Fail soft” or with minimized failure effect.', '“Fail passive” or without failure effect but with disconnection.', '“Fail hard” or with failure effect and disconnection.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_086',
      question: 'When only one autopilot is used for climbing, cruising and approach, the system is considered?',
      options: ['“Fail survival” or without failure effect with function always ensured.', '“Fail safe” with failure effect without disconnection.', '“Fail soft” with minimized failure effect but with disconnection.', '“Fail passive” or without failure effect.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_087',
      question: 'The autopilot basic modes include, among other things, the following functions?\n\n 1. Pitch attitude hold.\n 2. Pressure altitude hold.\n 3. Horizontal wing hold.\n 4. Heading hold.\n\nThe combination regrouping all the correct statements I?',
      options: ['1, 4.', '1, 3.', '1, 2, 3, 4.', '1, 2, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_088',
      question: 'The control law of a transport airplane autopilot control channel may be defined as the relationship between the\n?',
      options: ['Computer input deviation data and the signals received by the servo-actuators.', 'Input and output signals at the amplifier level respectively control deviation data and control deflection signals.', 'Crew inputs to the computer and the detector responses (returned to the airplane).', 'Computer input deviation data and the output control deflection signals.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_089',
      question: 'Four scenarios of VOR axis interception are represented below. The one corresponding to the optimal\ninterception path calculated by a flight director is number?',
      options: ['3.', '2.', '1.', '4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_090',
      question: 'When an aircraft, operating in the VOR coupled mode, approaches the “cone of confusion” over a VOR station,\nthe roll channel of the autopilot?',
      options: ['Remains always coupled to the selected VOR radial.', 'Is temporarily disconnected.', 'Maintains its existing heading.', 'Is damped by a trim input signal from the lateral trim system.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_091',
      question: 'A landing is performed automatically when the autopilot and auto-throttle ensure good performance from the\nfinal approach?',
      options: ['Unit the flare.', 'Unit reaching decision height.', 'During the landing roll and sometimes unit the aircraft comes to a complete stop.', 'Until reaching 10 ft, height at which point the autopilot is automatically disconnected.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_092',
      question: 'A semi-automatic landing system disconnects itself automatically?',
      options: ['On ground.', 'When going around.', 'At approximately 100 ft.', 'At the decision height.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_093',
      question: 'An automatic landing system necessitating that the landing be continued manually in the case of a system failure\nduring an automatic approach is\nCalled “FAIL…..”?',
      options: ['“OPERATINONAL”.', '“SAFE”.', '“REDUNDANT”.', '“PASSIVE”.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_094',
      question: 'An automatic landing system which can keep on operating without deterioration of its performances following\nthe failure of one of the autopilots is called “FAIL…..?',
      options: ['“REDUNDANT”.', '“OPERATIONAL”.', '“PASSIVE”.', '“SAFE”.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_095',
      question: 'During an automatic landing, from a height of about 50 ft the?',
      options: ['Autopilot maintains a vertical speed depending on the radio altimeter height.', 'Glideslope mode is disconnected and the airplane continues its descent until landing.', 'Autopilot maintains an angle of attack depending on the radio altimeter height.', 'Loc and Glideslope modes are disconnected and the airplane carries on its descent until landing.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_096',
      question: 'Automatic trim is a component of the autopilot pitch channel. Its function is to?',
      options: ['Reset the attitude, after engaging (the autopilot).', 'Set the attitude to an instantaneous value before engaging the autopilot.', 'Automatically disengage the autopilot in the case of an excessive pitch up.', 'Transfer a stabilized aeroplane to the pilot during autopilot disengagement.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_097',
      question: 'The auto-throttle:\n\n 1. Enable to catch and to maintain the N1 RPM.\n 2. Enable to catch and to maintain the N2 RPM.\n 3. Enable to catch and to maintain an airplane indicated airspeed (IAS).\n 4. Is always engaged automatically at the same time as the autopilot.\n\nThe combination regrouping all the correct statements is ?',
      options: ['1 and 3.', '2 and 3.', '1 and 4.', '1, 3 and 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_098',
      question: 'When the altitude acquisition mode is engaged on a jet transport airplane equipped with autopilot (AP) and auto-\nthrottle (ATS) systems the?',
      options: ['True airspeed (TAS) is maintained constant by the auto-throttle system.', 'Indicated airspeed (IAS) is maintained constant by the auto-throttle system.', 'Indicated airspeed (IAS) is maintained constant by the autopilot by means of elevator.', 'True airspeed (TAS) is maintained constant by the autopilot by means of elevator.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_099',
      question: 'The synchronization of the autopilot control channel system :\n\n 1. Enables the prevention of jerks during disengagement.\n 2. Enables the cancellation of rudder control signals.\n 3. Enables the prevention of jerks during engagement.\n 4. Functions in the heading, navigation, approach modes.\n\nThe combination regrouping all the correct statements is ?',
      options: ['3, 4.', '2, 4.', '1, 4.', '2, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_100',
      question: 'In a selected axis capture mode, the autopilot gives a bank attitude input?',
      options: ['Proportional to the deviation between the selected heading and the current heading but not exceeding a given value.', 'Of a fixed value equal to 27°.', 'Of a fixed value equal to 20°.', 'Proportional to the aircraft true airspeed but not exceeding a given value.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins05_101',
      question: 'Given :\nMH = magnetic heading of aircraft.\nOmega = yawing rate of the aircraft.\n\nThe yaw damper computer sends a motion signal to the rudder if :',
      options: ['The derivative of Omega according to time is not equal to zero.', 'The derivative of Omega according to time is equal to zero.', 'The derivative of MH according to time is equal to zero.', 'The derivative of MH according to time is not equal to zero. COMPASS'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins06: [
    {
      id: 'ins06_001',
      question: 'The centre of gravity of the compass rose of a direct reading magnetic compass lies below the pivot point to\nreduce the influence of the :',
      options: ['Magnetic inclination.', 'Magnetic variation.', 'Parallax error.', 'Position error.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_002',
      question: 'Which of the following statements about hard and soft iron in relation to magnetism to correct :',
      options: ['Hard iron magnetism is of a non-permanent nature and soft iron magnetism is of a permanent nature.', 'Both hard and soft iron magnetism are of a permanent nature.', 'Hard iron magnetism is of a permanent nature and soft iron magnetism is of a non-permanent nature.', 'Both hard and soft iron magnetism are of a non-permanent nature.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_003',
      question: 'A direct reading magnetic compass will be affected by ?',
      options: ['Soft iron.', 'Hard iron.', 'Aluminium.', 'Soft iron effect hard iron, and hard iron.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_004',
      question: 'The purpose of the torque motor in a gyro stabilized magnetic compass is to ?',
      options: ['Precess the directional gyro.', 'Adjust the selsyn stator.', 'Calibrate the pointer.', 'Convert flux valve electrical output into pointer movement.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_005',
      question: 'When landing on a northerly heading a direct reading magnetic compass will indicate?',
      options: ['a westerly turn.', 'An easterly turn.', 'No turn', 'Rapidly increasing oscillations.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_006',
      question: 'Magnetic heading can be calculated from true heading using?',
      options: ['A compass and a map indicating isogonal lines.', 'A compass and a calibration card.', 'A calculator and a deviation card.', 'A compass and a deviation card.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_007',
      question: 'A direct reading compass will not be affected by ?',
      options: ['Ferrous metals.', 'Transformers.', 'Magnetic fields.', 'Non-ferrous metals.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_008',
      question: 'The purpose of a compass swing is to?',
      options: ['Align the lubber lines with true north.', 'Confirm the accuracy of the schuler tuning.', 'Align compass north with magnetic north.', 'Align compass north with true north.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_009',
      question: 'When landing in a southerly direction a direct reading magnetic compass will indicate ?',
      options: ['Easterly turn.', 'Westerly turn.', 'No turn.', 'Rapidly increasing oscillations.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_010',
      question: 'Permanent magnetism in aircraft is caused by ?',
      options: ['The hammering of rivets during construction.', 'Large changes in latitude.', 'Large changes in longitude.', 'Strong electrical fields and lightening strikes.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_011',
      question: 'A magnetic compass must be swung?',
      options: ['After long term changes in latitude.', 'After long term changes in longitude.', 'Short term changes in longitude.', 'Change of base airfield.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_012',
      question: 'The greatest cause of errors in a direct reading magnetic compass is ?',
      options: ['Turning.', 'Latitude changes.', 'Parallax.', 'Changes in magnetic deviation.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_013',
      question: 'The sensitivity of a magnetic compass can be affected by ?',
      options: ['The H component of the earth’s magnetic field.', 'The Z component of the earth’s magnetic field.', 'Both of the above.', 'None of the above.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_014',
      question: 'When cruising on a westerly heading a direct reading magnetic compass will indicate?',
      options: ['Northerly turn.', 'Southerly turn.', 'No turn.', 'Rapidly increasing oscillations.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_015',
      question: 'When taking-off on a calm day on heading of 45° in the northern hemisphere, the compass will indicate …. If\nthe field is on an agonic line?',
      options: ['45°.', 'More than 45°.', 'Less than 45°.', '45° only if the wings are level.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_016',
      question: 'The flux gate of a gyro magnetic compass transmits data to ?',
      options: ['The error detector.', 'The amplifier.', 'The erecting system.', 'The annunciator.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_017',
      question: 'Magnetic heading can be found from true heading using?',
      options: ['A compass and a map showing isoclinal lines.', 'A compass and a map showing isogonal lines.', 'A compass and compass calibration chart.', 'A compass and deviation card.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_018',
      question: 'In a remote indicating magnetic compass the flux valve?',
      options: ['Uses a DC power supply.', 'Uses an AC power supply.', 'Requires no power supply because it uses its own self-exciter unit..', 'Is manufactured from perm-alloy steel.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_019',
      question: 'The output of the flux valve is fed to the?',
      options: ['Feed back loop.', 'Compass card.', 'Amplifier.', 'Error detector.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_020',
      question: 'What is the strength of the H component of the earths magnetic field (in micro teslas) at the North pole?',
      options: ['0.', '10.', '16.', '23.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_021',
      question: 'A direct reading magnetic compass will be affected by ?\n\n 1. Adjacent electrical equipment.\n 2. Ferrous metals.\n 3. Non-ferrous metals.',
      options: ['1, 2.', '1, 3.', '1, 4.', '3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_025',
      question: 'Upon landing on a northerly heading a DRMC will indicate?',
      options: ['A turn to the east.', 'A turn to the west.', 'No turn.', 'Oscillations about north.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_023',
      question: 'The principal cause of errors in a direct reading magnetic compass is?',
      options: ['Latitude.', 'Magnetic deviation.', 'Parallax.', 'Turning.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_024',
      question: 'The function of the torque motor in a gyro stabilized magnetic compass is to ?',
      options: ['Move the selsyn stators.', 'Move the heading pointer.', 'Precess the directional gyro.', 'Receive the input from the flux valve.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_025_2',
      question: 'Errors in direct reading magnetic compasses can be caused by ?',
      options: ['Turns through 90 degrees East and 270 degrees west.', 'Accelerations on east/west headings.', 'Crosswinds when on east/west headings.', 'Parallax.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_026',
      question: 'In an aircraft taking-off on a westerly heading in the northern hemisphere, what will its DRMC indicate?',
      options: ['Southerly turn.', 'Northerly turn.', 'Oscillations about west.', 'No turn.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_027',
      question: 'To what does the flux valve of a gyro magnetic compass transmit information?',
      options: ['Erecting system.', 'Error detector.', 'Amplifier.', 'Heading indicator card.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_028',
      question: 'The purpose of a compass swing is to?',
      options: ['Align compass north with true north.', 'Align compass north with magnetic north.', 'Align true north with the lubber line.', 'Draw up a compass correction card.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_029',
      question: 'From what does the flux valve in a RIMC get its power supply?',
      options: ['DC busbar.', 'AC busbar.', 'Internal self-exciter system.', 'It does not require one because it is made of perm-alloy material.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_030',
      question: 'A runway in the northern hemisphere is on an agonic line and heading 045 degrees. If an aircraft with zero\ncompass deviation takes off in still air, what will the northerly turning errors be?',
      options: ['The compass will remain on 045.', 'The compass will move to less than 045.', 'The compass will move to more than 045.', 'If the wings remain level the compass will remain on 045.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_031',
      question: 'In order to convert true heading into magnetic heading a compass card and ……. Are required?',
      options: ['Deviation card.', 'Error card.', 'Map with isogonal lines.', 'Map with isoclinal lines.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_032',
      question: 'What will the DRMC indicate when an aircraft lands in a southerly direction in the southern hemisphere?',
      options: ['Westerly turn.', 'Easterly turn.', 'No turn.', 'Oscillations about north.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_033',
      question: 'To improve the horizontality of a compass, the magnet assembly is suspended from a point?',
      options: ['On the centre line of the magnet.', 'Below the centre of gravity.', 'Above the centre of gravity.', 'Varying with magnetic latitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_034',
      question: 'A DRMC can be affected by ?',
      options: ['Hard iron.', 'Mild iron.', 'Soft iron.', 'Northerly accelerations.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_035',
      question: 'The maximum gyro drift rate due to earth rate is ?',
      options: ['5 degrees per hour.', '15 degrees per hour.', '90 degrees per hour.', '180 degrees per hour.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_036',
      question: 'At what DRMC heading is roll out required when conducting a turn from south-west to south-east at\n45 degrees north?',
      options: ['115 degrees.', '135 degrees.', '140 degrees.', '145 degrees.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_035_2',
      question: 'At what point on the earth would earth rate wander and transport wander be zero?',
      options: ['North pole.', 'Equator.', 'South pole.', '45 degrees north and south.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_038',
      question: 'From what does a gyro magnetic compass torque motor obtain its information?',
      options: ['Error detector.', 'Flux valve.', 'Amplifier.', 'Rotor gimbal tilt unit.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_039',
      question: 'What is the maximum drift error that can be sensed by an uncompensated DGI?',
      options: ['5 degrees per hor.', '10 degrees per hour.', '15 degree per hour.', '20 degrees per hour.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_040',
      question: 'Magnetic dip angle at the south pole is?',
      options: ['Zero.', '45 degrees.', '60 degrees.', '90 degrees.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_041',
      question: 'Earth rotation at 45 degrees north will cause the spin axis of a directional gyro to move?',
      options: ['7.6 degrees clockwise.', '6.7 degrees anti-clockwise.', '10.6 degrees clockwise.', '10.6 degrees anti-clockwise.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_042',
      question: 'The DRMC in an aircraft accelerating for take – off on a runway with QDM 45 degrees, in the northern\nhemisphere, will indicate ?',
      options: ['45 degrees.', 'More than 45 degrees.', 'Less than 45 degrees.', '45 degrees as long as the wings are level.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_043',
      question: 'When turning right through 90 degrees to north, in the northern hemisphere roll out should be conducted on a\nheading of ?',
      options: ['10 degrees.', '20 degrees.', '330 degrees.', '350 degrees.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_044',
      question: 'A magnetic compass must be swung after?',
      options: ['A short term change in latitude.', 'Long term change in latitude.', 'Short term change in longitude.', 'Long term change in longitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_045',
      question: 'To what is the output of the flux valve in a remote indicating compass initially fed?',
      options: ['Amplifier.', 'Gyro precessing torque motor.', 'Error detector.', 'Indicator.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_046',
      question: 'When turning from SE to SW at 50 degrees north, the roll out should occur at?',
      options: ['180 degrees.', '210 degrees.', '225 degrees.', '245 degrees.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_047',
      question: 'When turning from SW to SE at 45 degrees north, the roll out should occur at?',
      options: ['115 degrees.', '135 degrees.', '140 degrees.', '150 degrees.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_048',
      question: 'What will the compass indicate as an aircraft lands and decelerates on a westerly heading on the magnetic\nequator?',
      options: ['Turn to south.', 'Turn to west.', 'Oscillations.', 'No turn.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_049',
      question: 'If the ADF pointer indicates 270 degrees when the RMI rose is stuck at 075 degrees, what is the relative bearing\nof the beacon?',
      options: ['290 degrees.', '110 degrees.', '195 degrees.,', 'It cannot be determined from this information.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins06_050',
      question: 'What are the errors in a DGI?\n\n 1. Transport wander.\n 2. Earth rate.\n 3. Heading error when banking and pitching.\n 4. Mechanical imperfections.',
      options: ['FL200.', 'FL150.', 'FL220.', 'FL250. EFIS'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins07: [
    {
      id: 'ins07_001',
      question: 'According to AMC 25-11 concerning the electronic display system (EFIS), the colours used are :',
      options: ['Red for warnings, magenta for autopilot or flight director engaged modes.', 'Red for the flight envelope and systems limits, green for the autopilot or flight director engaged modes.', 'Red for caution and abnormal sources, white for flight envelope limits.', 'Amber for system limits, white for autopilot of flight director engaged modes.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_002',
      question: 'The Navigation Display (ND) modes can be :\n\n 1. ARC or MAP covering 45 degrees either side of the instantaneous track.\n 2. ROSE or MAP CENTRED rose with current heading.\n 3. PLAN map oriented true north.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 2, 3.', '2, 3.', '1, 2.', '1, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_003',
      question: 'On a navigation display (ND) of an EFIS equipped aircraft, the colours are ;',
      options: ['White or blue for active waypoint (TO Waypoint), red for medium precipitation.', 'Amber or white for active waypoint (TO Waypoint), yellow for high precipitation.', 'Magenta or white for active waypoint (TO Waypoint), green for light precipitation.', 'Magenta or red for active waypoint (TO Waypoint), amber for medium precipitation.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_004',
      question: 'According to AMC 25-11 concerning the electronic display system (EFIS), the colours associated with a caution\ntype alert is :',
      options: ['Red.', 'Amber or yellow.', 'White.', 'Magenta.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_005',
      question: 'The Navigation Display (ND) of an EFIS equipped aircraft can display the following data :',
      options: ['Intruding traffic, altitude, autopilot active modes, weather radar.', 'Flight plan, weather radar, terrain map, intruding traffic.', 'Flight plan, engine failure, navaids, resolution advisories.', 'Terrain map, navaid bearings, flight director active modes.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_006',
      question: 'An EFIS includes the following components :',
      options: ['Symbol generator, display units, control panel.', 'Display units only.', 'FMS, symbol generator, display units.', 'ADC, inertial navigation computer, display units.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_007',
      question: 'According to AMD 25-11 concerning the electronic display system (EFIS), the white colour is associated with\nthe following alert :',
      options: ['Caution.', 'Warning.', 'Armed modes.', 'Engaged modes.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_008',
      question: 'According to AMC 25-11 concerning the electronic display system (EFIS), the red colour is associated with the\nfollowing alert :',
      options: ['Caution.', 'Warning.', 'Status.', 'Advisory.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_009',
      question: 'The Primary Flight Display (PFD) of an EFIS equipped aircraft displays the following parameters :',
      options: ['Attitude, Heading, IAS, Navigation map is flight plan mode.', 'IAS, Attitude, Altitude, Heading.', 'Altitude, attitude, heading, engine parameters.', 'Altitude, attitude, heading, systems parameters.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_010',
      question: 'The Primary Flight Display (PFD) of an EFIS equipped aircraft displays the following parameters :\n\n 1. Radio height.\n 2. IAS.\n 3. Localizer Glide Slope deviation pointers.\n 4. Flight Director modes.\n 5. Autopilot modes.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 2, 3, 4, 5.', '1, 2, 3, 5.', '2, 5.', '3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_011',
      question: 'According to AMC 25-11 concerning the electronic display system (EFIS), the colour associated with an armed\nmode is :',
      options: ['White or cyan.', 'Green.', 'Magenta.', 'Yellow.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_012',
      question: 'According to AMC 25-11 concerning the electronic display systems, the green colour is associated with the\nfollowing indications :',
      options: ['Armed modes.', 'Status.', 'Advisory.', 'Engaged mode.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_013',
      question: 'The sideslip indication displayed on the PFD (Primary Flight Display) is generated by the :',
      options: ['Compass.', 'Yaw damper.', 'ADC.', 'Inertial system.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_014',
      question: 'The Primary Flight Display (PFD) of an EFIS equipped aircraft can display information relating to the following\nconditions :',
      options: ['Altitude capture, TCAS resolution advisory, autopilot and flight director mode changes.', 'Pressurization failure, altitude capture, TCAS resolution advisory.', 'Altitude capture, Breaking system, autopilot and flight direction mode changes.', 'Low engine oil pressure, terrain alerts, windshear detection.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_015',
      question: 'According to AMC 25-11 concerning the electronic display system (EFIS), the colour associated with a warning\ntype alert is :',
      options: ['Red.', 'Amber.', 'Magenta.', 'Yellow.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_016',
      question: 'According to AMC 25-11 concerning the electronic display system (EFIS), when exceeding the limits of the\nflight envelope, the colour accepted to alert the flight crew is',
      options: ['Amber.', 'Red.', 'Magenta.', 'Yellow.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_017',
      question: 'According to JAR/CS 25-11 concerning the electronic display systems, the amber/yellow colours are associated\nwith the following alert:',
      options: ['Status.', 'Caution.', 'Warning.', 'Advisory.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_018',
      question: 'According to AMC 25-11 concerning the electronic display systems, the colour associated with an engaged\nmode is :',
      options: ['White.', 'Amber.', 'Green', 'Magenta.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_019',
      question: 'Cautionary information on an EHSI is displayed in ?',
      options: ['Cyan.', 'Red or magenta.', 'Yellow or Amber.', 'White.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_020',
      question: 'The Primary Flight Display (PFD) displays information dedicated to ?',
      options: ['Weather.', 'Piloting.', 'Engines and alarms.', 'Systems.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_021',
      question: 'Decision height is?',
      options: ['Calculated by the Flight management Computer.', 'Displayed on the EADI, and set by the pilot using the EFIS control panel.', 'Displayed on the EADI using the FMC inputs.', 'Pre-set automatically by the autopilt system.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_022',
      question: 'The symbol below when shown on an EHSI display represents?',
      options: ['The selected track and track reference.', 'The selected heading and heading reference.', 'The heading orientation, current heading, heading reference and heading pointer.', 'The track orientation, current track, track reference and track pointer.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_023',
      question: 'In addition to altitude and auto-flight modes, what information is also typically displayed on an EADI?',
      options: ['Engine indications and systems information.', 'Altitude, speed and sometimes heading information.', 'Speed, altitude, ILS Localiser and Glide Slope information, and sometimes heading information.', 'Altitude, groundspeed, heading and wind speed and direction.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_024',
      question: 'Regarding the Electronic Flight Instruments Systems (EFIS).\n\n 1. The Navigation Display (ND) displays Flights Director Bars.\n 2. The altimeter setting is displayed on the Primary Flight Display (PFD).\n 3. The Primary Flight Display (PFD) is the main flying instrument.\n 4. The Flight Mode Annunciator (FMA) is part of the Navigation Display (ND).\n\nThe combination regrouping all of the correct statements is ?',
      options: ['1, 2.', '3, 4.', '1, 4.', '2, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_025',
      question: 'Below which altitude does the radio altitude indication on an EADI appear within the circular scale is a digital\nreadout?',
      options: ['Above 2500 ft.', 'Below 1000 ft.', 'Below 2500 ft.', 'Above 1000 ft.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_026',
      question: 'Which of the following statements is true?',
      options: ['The Weather Radar display data is available on all modes of the EHSI.', 'In PLAN mode, the Weather Radar data is inhibited on the EHSI.', 'The weather radar data is inhibited on the full and expanded NAV modes of he EHSI.', 'The Weather Radar data is only available on the PLAN mode of the EHSI.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_022_2',
      question: 'Radio altitude is shown on the EADI and changes from a digital display to a circular scale?',
      options: ['At 2500 ft.', 'At 1000 ft and below AGL.', 'Below 1000 ft AGL.', 'At DH.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_028',
      question: 'Weather Radar returns show as areas of precipitation in the following colours?',
      options: ['Green, Magenta, Yellow and Red.', 'Green, Orange, Yellow and Red.', 'Green, Yellow, Red and Magenta.', 'Green, Yellow, Magenta and Red.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_029',
      question: 'In the diagram below the next waypoint to be overflown is ….. and the estimated ….is ….?',
      options: ['TIC, time of departure, 01:44.', 'TIC, time of arrival, 15:08.', 'VLM, time of departure, 01:44.', 'VLM, time of arrival, 15:08.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_030',
      question: 'The symbol shown appears in white on the EHSI display. It represents ?',
      options: ['An off-route waypoint.', 'The aeroplane.', 'An inactive waypoint.', 'A VOR/DMEE.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_031',
      question: 'On an EHSI display, wind velocity can be displayed in which of the following modes?',
      options: ['Plan, Full ILS, Expanded VOR and Full VOR.', 'Map, Expanded ILS, Full ILS and Full VOR.', 'Map, Plan, Full ILS and Full VOR.', 'Expanded ILS, Expanded VOR, Plan and Full ILS.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_032',
      question: 'Command information is displayed in ….. on the EHSI?',
      options: ['White.', 'Green.', 'Red.', 'Magenta.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_033',
      question: 'In which of the following EHSI modes are the Weather Radar returns visible?',
      options: ['Any full mode.', 'Plan mode.', 'Map mode and in any expanded mode.', 'Any expanded mode.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_034',
      question: 'Decision height is displayed on the ?',
      options: ['EADI, and below 2500 ft the display changes to a circular scale with magenta coloured marker.', 'EADI, and below 1000 ft is shown as a circular scale which is erased anti-clockwise as the aircraft descends.', 'EHSI, in Map mode, and below 1000 ft is shown as a circular display, which is erased, anti-clockwise as the aircraft descends.', 'EADI, and below 800 ft changes to a circular scale which is white with a magenta DH marker.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_035',
      question: 'The heading reference used on the EHSI is?',
      options: ['True.', 'True or Magnetic.', 'Magnetic.', 'Compass.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_036',
      question: 'On the FMA, engaged flight automatic flight modes are displayed in ?',
      options: ['Blue.', 'Green.', 'Red.', 'Magenta.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_037',
      question: 'The EFIS control panel allows selection of ?',
      options: ['EADI, operating modes.', 'EHSI fail-operational fall back mode.', 'Autopilot operating modes.', 'Decision height.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_038',
      question: 'Which colours are typically used on an EHSI?',
      options: ['Red and blue.', 'Black, blue, purple, red, green and white.', 'Magenta, brown, black and green.', 'White, green, magenta, cyan, yellow and red.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_039',
      question: 'Which mode is selected on the Navigation Display in the diagram below ?',
      options: ['Expanded VOR mode.', 'Full VOR mode.', 'Plan mode.', 'Expanded ADF mode.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_040',
      question: 'In PLAN mode?',
      options: ['The active flight path appears as a red line joining successive waypoint.', 'The Weather Radar display data is inhibited.', 'The display may be oriented to Grid North.', 'The wind arrow is oriented to True North.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_041',
      question: 'At what height does the DH, on the EADI display, start flashing yellow?',
      options: ['At DH plus 100 ft.', 'On reaching DH.', 'On touchdown.', 'At 1000 ft AGL.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_042',
      question: 'In the displayed weather modes, the intensities of the returns in ascending order of intensity are ?',
      options: ['Yellow, green, blue and red.', 'Yellow, green, red and magenta.', 'Green, yellow, red and magenta.', 'Blue, green, yellow and red.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_043',
      question: 'The green symbol of a circle with T/D on the EHSI display below represents?',
      options: ['The actual top-of-descent.', 'The FMC calculated top-of-climb.', 'An en-route waypoint.', 'The FMC calculated top-of-descent.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_044',
      question: 'The EHSI mode in which the whole compass rose is not visible and upon which the relative bearing to the active\nwaypoint is shown although the waypoints themselves are not, is the?',
      options: ['Full rose, VOR mode.', 'Centre MAP mode.', 'Expanded VOR mode.', 'Expanded NAV mode.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_045',
      question: 'The Weather Radar display can be shown on the?',
      options: ['Only one EHSI at a time.', 'The First Officer’s EHSI only.', 'The Captain’s ERSI only.', 'The Captain’s and the First Officer’s EHSI simultaneously.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_046',
      question: 'Aircraft electronic display systems normally incorporate?',
      options: ['One symbol generator for each CRT.', 'LED alphanumeric displays.', 'Automatic CRT brightness control.', 'A single CRT for each pilot.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_047',
      question: 'The speed tape on an EADI is located?',
      options: ['On the left side of the EADI.', 'On the left side of the EHSI.', 'At the top of the ADI.', 'On the right side of the EADI.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_048',
      question: 'An EFIS installation in a Boeing 737 consists of?',
      options: ['Two screens, one control panel and two symbol generators.', 'Two screens and one symbol generator.', 'Four screens and two symbol generators.', 'Four screens and three symbol generators.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_049',
      question: 'Which of the following displays are part of the Electronic Flight Instrumentation System (for Boeing Aircraft)?',
      options: ['ND and Electronic Attitude Director Indicator.', 'EHSI and PFD.', 'Navigation Display and Primary Flight Display.', 'Electronic Attitude Director Indicator and Electronic Horizontal Situation Indicator.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins07_050',
      question: 'Which mode is selected on the EHSI illustrated below ?',
      options: ['Expanded VOR mode.', 'Expanded ILS mode.', 'Full VOR mode.', 'Map Mode. EICAS/ECAM'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins08: [
    {
      id: 'ins08_001',
      question: 'In a basic ECAM system?',
      options: ['The left screen show information in checklist and memo form, whilst the right screen shows relevant diagrams.', 'The right screen shows information in checklist or memo form, whilst the left screen shows the relevant diagrams.', 'The left screen is normally blank with the right showing primary engine data.', 'The right screen is normally blank with the left showing primary engine data.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_002',
      question: 'The basic ECAM system has?',
      options: ['Three automatic modes and one manual mode.', 'Four automatic modes and one manual mode.', 'Three manual modes and one automatic mode.', 'No manual modes.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_003',
      question: 'A message enclosed within a box?',
      options: ['Is used in EICAS to show a system which is unserviceable.', 'Is used in ECAM to show a system which is unserviceable.', 'Is used in EICAS to show a system which although serviceable, is rendered non-operational due to the failure of a different system.', 'Is used in ECAM to show a system which although serviceable, is rendered non-operational due to the failure of a different system.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_004',
      question: 'ECAM provides?',
      options: ['Information in checklist or memo format on the left or upper display and a synoptic diagram on the right or lower display.', 'Information in checklist or memo format on the right or lower display and a synoptic diagram on the left or upper display.', 'No information about the engines.', 'Information about the engines only on the right or lower displays.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_005',
      question: 'If a screen fails in a basic (non-EFIS equipped) ECAM system?',
      options: ['The information that would normally appear on that screen is displayed in compacted format on the other screen.', 'The information that would normally be displayed on that screen is provided on conventional analogue displays.', 'The information that would normally be displayed on that screen is lost.', 'The engine primary data is displayed on the emergency engine data LED display.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_006',
      question: 'If a screen fails in an advanced (EFIS equipped) ECAM system?',
      options: ['The information that would normally appear on that screen is displayed in compacted format on the other screen.', 'The information that would normally be displayed on that screen is automatically transferred to one of the EFIS screens.', 'The information that would normally be displayed on that screen is lost.', 'The engine primary data is displayed on the emergency engine data LED display.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_007',
      question: 'If a screen fails in a basic (non EFIS equipped) EICAS system?',
      options: ['The information that would normally appear on that screen is displayed in compacted format on the other screen.', 'The information that would normally be displayed on that screen is automatically transferred to one of the EFIS screens.', 'The information that would normally be displayed on that screen is lost.', 'The engine primary data is displayed on the emergency engine data LED display.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_008',
      question: 'If a screen fails in an advanced (EFIS equipped) EICAS system?',
      options: ['The information that would normally appear on that screen is displayed in compacted format on the other screen.', 'The information that would normally be displayed on that screen is automatically transferred to one of the EFIS screens.', 'The information that would normally be displayed on that screen is lost.', 'The engine primary data is displayed on the emergency engine data LED display.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_009',
      question: 'If an emergency occurs in an aircraft employing advanced ECAM?',
      options: ['The nature of the problem is indicated in red at the bottom left of the upper display, together with corrective instructions in blue.', 'The nature of the problem is indicate in amber at the bottom left of the upper display, together with corrective instructions in white.', 'The nature of the problem is indicated in red at the top left of the upper display.', 'The nature of the problem is indicated in red on the lower display.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_010',
      question: 'If an emergency occurs in an aircraft employing advanced EICAS?',
      options: ['The nature of the problem is indicated in red at the bottom left of the upper display, together with corrective instructions in blue.', 'The nature of the problem is indicate in amber at the bottom left of the upper display, together with corrective instructions in white.', 'The nature of the problem is indicated in red at the top left of the upper display.', 'The nature of the problem is indicated in red on the lower display.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_011',
      question: 'In EICAS?',
      options: ['Engine primary data such as N1, EGT and EPR are displayed constantly on the lower screen, the upper screen remaining blank in normal flight.', 'Engine primary and secondary data plus flap, slat and flying control positions are displayed constantly on the upper screen, the lower screen remaining blank throughout normal flight.', 'Engine primary and secondary data plus flap, slat and flying control positions are displayed constantly on the lower screen, the upper screen remaining blank throughout normal flight.', 'Engine primary data such as N1, EGT and EPR are displayed constantly on the upper screen, the lower screen remaining blank in normal flight.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_012',
      question: 'The EICAS display modes are ?',
      options: ['Operational, status and maintenance.', 'Normal, failure, status, manual.', 'Operational, status, manual, emergency.', 'Normal, manual, status.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_013',
      question: 'A red message on an upper EICAS display?',
      options: ['Is a warning of a situation for which immediate corrective action is required. It may or may not be accompanied by an aural warning, depending on the seriousness of the situation.', 'Is a warning of a situation for which immediate corrective action is required. It will be accompanied by an appropriate aural warning.', 'Advises the crew of a situation that does not require immediate corrective action, but might do so in the near future. It will always be accompanied by an aural warning.', 'Advises the crew of a situation that does not require immediate corrective action, but might do so in the near future. It may or may not be accompanied by an aural warning, depending upon the seriousness of the situation.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_014',
      question: 'An amber message on an upper EICAS display?',
      options: ['Is a warning of a situation for which immediate corrective action is required. It may or may not be accompanied by an aural warning, depending on the seriousness of the situation.', 'Is a warning of a situation for which immediate corrective action is required. It will be accompanied by an appropriate aural warning.', 'Advises the crew of a situation that does not require immediate corrective action, but might do so in the near future. It will always be accompanied by an aural warning.', 'Advises the crew of a situation that does not require immediate corrective action, but might do so in the near future. It may or may not be accompanied by an aural warning, depending upon the seriousness of the situation.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_015',
      question: 'A green bug on an EICAS EPR gauge indicates?',
      options: ['The current EPR value.', 'The fact that the current EPR value is the correct one for that stage of flight.', 'The target EPR value.', 'The maximum safe EPR value.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_016',
      question: 'The main advantages of EICAS and ECAM are ?',
      options: ['More accurate indications.', 'Lighter and cheaper instruments.', 'Less cockpit clutter and better information management.', 'The ability to display parameters for multiple engines.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_017',
      question: 'How will a single EICAS failure be displayed.\n\n 1. If one screen of a basic EICAS system fails the other will go into compacted display mode.\n 2. If one computer of an EICAS system fails an amber caption will appear on the upper display but the\n system will continue to function.\n 3. If one screen of an advanced EICAS system fails the information from that screen will be automatically\n transferred to one of the EFIS navigation displays, and an amber caption will appear on the screen\n depicting EICAS primary data.',
      options: ['1, 2.', '1, 3.', '2, 3.', 'All of the above.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_018',
      question: 'If both displays fail on a basic EICAS system?',
      options: ['Limited engine primary data (N1, N2, EGT) are displayed on an EFIS screen.', 'Limited engine primary data (N1, N2, EGT) are displayed on analogue gauges.', 'Limited engine primary data (N1, N2, EGT) are displayed on the standby engine LED indicator.', 'All data becomes unavailable.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_019',
      question: 'An EICAS advisory message?',
      options: ['Appears in amber on the upper display, indented one digit to the left.', 'Appears in amber on the upper display, intended one digit to the right.', 'Appears in green on the lower display, indented one digit to the right.', 'Appears in amber on the lower screen, indented one digit to the right.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_020',
      question: 'For what is the colour red used in EICAS and ECAM displays?',
      options: ['Warning and cautions.', 'Cautions and limits.', 'Warnings and limits.', 'Cautions and limits.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_021',
      question: 'How must a pilot react to an amber EICAS or ECAM indication?',
      options: ['Take immediate corrective action.', 'Take no action, it is for information only.', 'Take no immediate corrective action but be aware of it and consider its potential effects in the event of other failures.', 'Contact ATC immediately and divert to the nearest capable airfield.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_022',
      question: 'What indication is given for an ECAM system failure?',
      options: ['Light only.', 'Light and aural.', 'A button is illuminated to indicate how to switch off warning.', 'Amber message.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_023',
      question: 'What is the purpose of the cancel and recall buttons on an EICAS or ECAM system?',
      options: ['To delete unwanted messages and recover them if the situation suddenly deteriorates.', 'To scroll down and up the list of warnings, cautions and advisories, when they fill more than one page.', 'To delete warnings if they cannot be rectified, and to recover them if it is decided to make a further attempt.', 'To delete low priority messages to concentrate on the high priority ones. Then to recall the low priority messages when the more important ones have been dealt with.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_024',
      question: 'When an ECAM warning has been dealt with?',
      options: ['The blue corrective instructions will be replaced by a blue statement of the new configuration.', 'The red corrective instructions will be deleted.', 'The blue corrective instructions will be deleted.', 'The blue corrective instructions will be replaced by a green statement of the new configuration.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_025',
      question: 'When the ECAM T/O button is pushed?',
      options: ['The aircraft takes-off.', 'The system checks that the aircraft is in the take-off configuration.', 'The system puts the aircraft into the take-off configuration.', 'The system prepares the aircraft for take-off, then awaits the release of the brakes before spooling up the engines.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_026',
      question: 'When the Take – off button on an ECAM system is pushed?',
      options: ['The aircraft conducts an automatic take-off, to flap retraction height.', 'The aircraft conducts an automatic take-off and climb out to cruise height.', 'The ECAM confirms that the aircraft is in the take-off configuration.', 'The ECAM confirms that the aircraft is in the lift-off attitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_027',
      question: 'The basic ECAM system displays?',
      options: ['Engine and aircraft systems primary data.', 'Engine and aircraft systems primary and secondary data.', 'Aircraft systems primary data.', 'Aircraft systems primary and secondary data.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_028',
      question: 'Both ECAM and EICAS?',
      options: ['Display engine secondary data in analogue format only.', 'Display engine secondary and primary data in digital format only.', 'Display engine primary and secondary data in analogue and digital format.', 'Display engine primary data in analogue and digital format, and secondary only in analogue format.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_029',
      question: 'ECAM displays warnings and cautions?',
      options: ['At the right side of the left or upper display.', 'At the left side of the right or lower display.', 'At the bottom of the left or upper display.', 'At the top of the left or upper display.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_030',
      question: 'The correct response to an EICAS red message is to?',
      options: ['Take immediate corrective action.', 'Press the status button to get more information about the failed system.', 'Press the cancel button to see if other faults exists.', 'Press the recall button to obtain a list of corrective actions.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_031',
      question: 'The correct response to an EICAS amber and aural message is?',
      options: ['Take the immediate corrective actions listed on the bottom of the upper display.', 'Take no immediate action but be aware of the situation.', 'Take immediate corrective actions listed on the lower display.', 'Press the recall button to obtain a list of corrective actions required.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_032',
      question: 'The correct response to an EICAS amber without aural message is ?',
      options: ['Take the immediate corrective actions listed on the bottom of the upper display.', 'Take no immediate action but be aware of the situation.', 'Take immediate corrective actions listed on the lower display.', 'Press the recall button to obtain a list of corrective actions required.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_033',
      question: 'The correct response to an ECAM red message is ?',
      options: ['To take immediate corrective action as listed on the bottom of the left or upper display.', 'To press the recall button to obtain details of corrective actions required.', 'Take no immediate actions but be aware of the situation.', 'Corrective action will be taken automatically by the system.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_034',
      question: 'Where are the flying control positions indicated on an advanced ECAM system?',
      options: ['The right side of the upper display.', 'The left side of the upper display.', 'The bottom of the lower display.', 'The left side of the lower display.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_035',
      question: 'Where are the flap and slat positions indicated on an advanced ECAM system?',
      options: ['The right side of the upper display.', 'The left side of the upper display.', 'The bottom of the lower display.', 'The left side of the lower display.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_036',
      question: 'When an aircraft system failure occurs on an aircraft with a basic ECAM system?',
      options: ['The left display will indicate the situation in red or amber, together with the required corrective actions in blue. The right display will show a diagram of the faulty system.', 'The left display will indicate the situation in red or amber, together with the required corrective actions in green. The right display will show a diagram of the faulty system.', 'The right display will indicate the situation in red or amber, together with the required corrective actions in blue. The left display will show a diagram of the faulty system.', 'The right display will indicate the situation in red or amber, together with the required corrective actions in green. The left display will show a diagram of the faulty system.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_037',
      question: 'When the required corrective actions have been taken to remedy an aircraft system fault, an ECAM system will?',
      options: ['The upper screen will continue to display the original fault statement together with the blue corrective action list, but the lower screen will go blank.', 'The upper screen will briefly continue to display the original fault statement, but the list of corrective actions will become green. Both screens will then revert to normal.', 'The fault indications will immediately disappear as the screens return to normal.', 'The original fault statement will remain but the corrective actions list will turn green. The lower display will return to normal.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_038',
      question: 'In normal flight conditions an EICAS system display is?',
      options: ['Both screens blank.', 'Upper screen blank and lower one indicating primary engine data.', 'Lower screen blank and upper screen indicating primary engine data.', 'Upper screen indicating engine primary data and lower screen indicating engine secondary data.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_039',
      question: 'An engine fire on an EICAS equipped aircraft would be indicated by?',
      options: ['Red caption on the upper display and engine secondary data on the lower display.', 'Red caption on the upper display, aural warning, engine secondary data on the lower display.', 'Amber caption on the upper display and engine secondary data on the lower display.', 'Amber caption on the upper display, aural warnings, engine secondary data on the lower display.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_040',
      question: 'In an EICAS system, excessive EGT is indicated by?',
      options: ['The position and figures on an analogue and digital display.', 'The EGT display will turn red.', 'The EGT display will turn amber.', 'The EGT display will flash alternately red and amber.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_041',
      question: 'If the lower EICAS display fails but the EICAS system does not detect the failure.',
      options: ['The lower display will remain blank, but the upper will show a series of signs whenever data should be on the lower display.', 'Display failures are always detected by EICAS.', 'The lower display will remain blank, but the upper will show a series of signs whenever data should be on the lower display.', 'The system will automatically go into compacted display mode.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_042',
      question: 'The message on an ECAM display RADAL indicates?',
      options: ['The RADALT is defective.', 'The RADALT is not itself defective but it has been rendered unavailable due to the failure of another systems which is not identified.', 'The RADALT is not itself defective but it has been rendered unavailable due to the failure of another systems which is also identified by another message.', 'The RADALT has been switched on .'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_043',
      question: 'How is the lower screen in an EICAS system cleared when in status mode?',
      options: ['By pressing the CLR button.', 'By pressing the status button.', 'By repeatedly pressing the status button until all pages have been viewed.', 'By pressing the RCL button.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_044',
      question: 'Modern commercial transport aircraft will employ?',
      options: ['ECAM, EICAS and EFIS.', 'ECAM and EICAS but not EFIS.', 'EFIS and either ECAM or EICAS', 'EFIS only.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins08_045',
      question: 'The advantages of EICAS and ECAM include?\n\n 1. Reduced cockpit clutter.\n 2. Reduced pilot workload.\n 3. Easier identification of faults.\n 4. Easier interpretation of information in difficult conditions.\n 5. Lighter indication systems.\n 6. Better integration of information.',
      options: ['1, 2, 3, 4.', '2, 3, 4, 6.', '3, 4, 5, 6.', 'All of the above. ENGINES'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins09: [
    {
      id: 'ins09_001',
      question: 'The temperature measured by the CHT (Cylinder Head temperature) probe is The?',
      options: ['Temperature within the hottest cylinder, depending on its position in the engine block.', 'Average temperature within the whole set of cylinders.', 'Temperature of the exhaust gases.', 'Temperature of the carburetor to be monitored when the outside air temperature is between -5° C and 10° C.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_002',
      question: 'The signal supplied by a transmitter fitted with a 3-phase AC generator, connected to RPM indicator, is a DC\nvoltage varying with the RPM?',
      options: ['The indicator is a plain voltmeter with a rev/min scale measuring an AC voltage, the frequency of which varies with the RPM.', 'The indicator converts the signal into square pulses which are then counted as an AC voltage varying with the RPM.', 'The indicator rectifies the signal via a diode bridge and is provided with a voltmeter a three-phase voltage, the frequency of which varies with the RPM.', 'The indicator is provided with a motor, which drives a magnetic tachometer.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_003',
      question: 'The signal supplied by a transmitter fitted with a magnetic sensor, connected to an RPM indicator is a three-\nphase voltage frequency varies with the RPM?',
      options: ['The indicator is provided with a motor which drives a magnetic tachometer a DC voltage varying with the RPM.', 'The indicator is a simple voltmeter with a rev/min scale measuring an AC voltage varying with the RPM?', 'The indicator rectifies the signal via a diode bridge and is provided with a voltmeter measuring an AC voltage, the frequency of which varies with the RPM.', 'The indicator converts the signal into square pulses which are then counted.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_004',
      question: 'A vibration indicator receives a signal from different sensors (accelerometers). It indicates the?',
      options: ['Vibration period expressed in seconds.', 'Vibration amplitude at a given frequency.', 'Acceleration measured by the sensors, expressed in g.', 'Vibration frequency expressed in Hz.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_005',
      question: 'The transmitter of RPM indicator may consist of :\n\n 1. A magnetic sensor supplying an induced AC voltage.\n 2. A DC generator supplying a DC voltage.\n 3. A single-phase AC generator supplying an AC voltage.\n 4. A three-phase AC generator supplying a three-phase voltage.\n\nThe combination of correct statements is ?',
      options: ['1, 2, 3.', '1, 2, 3, 4.', '2, 3, 4.', '1, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_006',
      question: 'The Engine Pressure Ratio (EPR) is computed by?',
      options: ['Dividing turbine discharge pressure by compressor inlet pressure.', 'Dividing compressor discharge pressure by turbine discharge pressure.', 'Multiplying compressor inlet pressure by turbine discharge pressure.', 'Multiplying compressor discharge pressure by turbine inlet pressure.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_007',
      question: 'The principle of detection of a vibration monitoring system is based on the use of ?',
      options: ['2 accelerometers.', '2 high and low frequency amplifiers.', '2 high and low frequency filters.', 'A frequency converter.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_008',
      question: 'The green sector of the arc of a temperature gauge corresponds to?',
      options: ['An exceptional operating range.', 'A forbidden operating range.', 'A special operating range.', 'A normal operating range.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_009',
      question: 'A synchroscope is used on aircraft to ?',
      options: ['Reduce the vibration of each engine.', 'Reduce the rpm of each engine.', 'Achieve optimum control of on-board voltages.', 'Set several engines to the same speed.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_010',
      question: 'A thermocouple type thermometer consists of?',
      options: ['A single – wire metal winding.', 'Two metal conductors of different type connected at one point.', 'Two metal conductors of the same type connected at two points.', 'A Wheatstone bridge connected to a voltage indicator.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_011',
      question: 'The yellow sector of the temperature gauge corresponds to?',
      options: ['A frequent operating range.', 'A forbidden operating range.', 'An exceptional operating range.', 'A normal operating range.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_012',
      question: 'In an engine vibration monitoring system for a turbojet any vibration produced by the engine is?',
      options: ['Directly proportion to engine speed.', 'Fed directly to the cockpit indicator without amplification or filtering.', 'Amplified and filtered before being fed to the cockpit indicator.', 'Inversely proportional to engine speed.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_013',
      question: 'Different pressure sensors are used according to the intensity of the pressure measured (low, medium or high).\nClassify the following sensors by order of increasing pressure for which they are suitable?\n\n 1. Bellows type.\n 2. Bourdon tube type.\n 3. Aneroid capsule type.',
      options: ['2, 1, 3.', '3, 1, 2.', '1, 2, 3.', '3, 2, 1.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_014',
      question: 'The RPM indicator (or tachometer) of a piston engine can include a small red arc within the arc normally used\n(green arc). In the RPM range corresponding to this small red arc the?',
      options: ['Rating is the minimum usable in cruise propeller efficiency.', 'Is minimum at this rating.', 'Propeller generates vibration, continuous rating is forbidden.', 'Rating is the maximum possible in continuous mode.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_015',
      question: 'In order to measure temperature the cylinder head temperature (CHT) gauge utilizes a?',
      options: ['Thermocouple consisting of two dissimilar metals.', 'Wheatstone bridge circuit.', 'Ratiometer circuit.', 'Bourdon tube.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_016',
      question: 'A manifold pressure gauge of a piston engine measures?',
      options: ['Fuel pressure leaving the carburetor.', 'Vacuum in the carburetor.', 'Absolute pressure in intake system near the inlet valve.', 'Absolute air pressure entering the carburetor.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_017',
      question: 'If a manifold pressure gauge consistently registers atmospheric pressure, the cause is probably?',
      options: ['Leak in pressure gauge line.', 'Too high float level.', 'Fuel of too low volatility.', 'Ice in induction system.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_018',
      question: 'A millivoltmeter measuring he electromotive force between the “hot junction” and the “cold junction” of a\nthermocouple can be directly graduated in temperature valves provided that the temperature of the?',
      options: ['Cold junction is maintained constant.', 'Hot junction is maintained constant.', 'Cold junction is maintained at 15° C.', 'Hot junction is maintained at 15° C.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_019',
      question: 'The main advantage of a ratiometer-type temperature indicator is that it?',
      options: ['Is simple.', 'Can operate without an electrical power supply.', 'Is very accurate.', 'Carries out an independent measurement of the supply voltage.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_020',
      question: 'The probe used to measure the air intake pressure of a gas turbine engine powerplant is?',
      options: ['Differential capsule.', 'A bourdon tube.', 'A bellows sensor.', 'An aneroid capsule.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_021',
      question: 'The pressure probe used to measure the pressure of a low pressure fuel pump is?',
      options: ['An aneroid capsule.', 'A bellows sensor.', 'A Bourdon tube.', 'A differential capsule.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_022',
      question: 'The disadvantages of a single-phase A.C. generator tachometer are:\n\n 1. The presence of spurious signals due to a D.C. generator commutator.\n 2. The importance of lien resistance on the information value.\n 3. The influence of temperature on the tachometer information.\n\nThe combination regrouping all the correct statements is?',
      options: ['2.', '1, 2, 3.', '1, 2.', '1, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_023',
      question: 'The advantages of single-phase A.C. generator are :\n\n 1. The suppression of spurious signals due to a D.C. generator commutator.\n 2. The importance of line resistance on the information value.\n 3. The independence of the information in relation to the airborne electrical power supply.\n 4. The ease of transmission of the information.\n\nThe combination regrouping all the correct statements is ?',
      options: ['1, 3.', '1, 2, 3, 4.', '2, 3, 4.', '2, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_024',
      question: 'The advantages of a D.C. generator tachometer are:\n\n 1. Easy transmission of the information.\n 2. Independence of the information relative to the airborne electrical power supply.\n 3. Freedom from any spurious current due to the commutator.\n\nThe combination regrouping all the correct statements is ?',
      options: ['2, 3.', '1, 3.', '1, 2.', '1, 2, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_025',
      question: 'The electronic tachometer sensor is composed of?',
      options: ['The rotor of a single phase A.C. generator.', 'The rotor of a three phase A.C. generator.', 'A notched wheel rotating in front of an electro-magnet.', 'A circular magnet with four poles.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_026',
      question: 'The advantages of an electrical induction tachometer are:\n\n 1. The display is not sensitive to line resistance.\n 2. The measurement is independent of aircraft power supply.\n 3. The measurement is independent of temperature variations.\n 4. The option to use without restriction several indicators connected in parallel to a single transmitter.\n\nThe combination regrouping all the correct statements is ?',
      options: ['1, 3, 4.', '1, 2, 3, 4.', '2, 3, 4.', '1, 2, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_027',
      question: 'The measurement of the turbine temperature or of the EGT (Exhaust Gas Temperature) is carried out at the?',
      options: ['Combustion chamber outlet.', 'Combustion chamber intake.', 'High pressure chamber intake.', 'High pressure turbine outlet.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_028',
      question: 'The sensors used to measure the exhaust gas temperature on an aircraft equipped with turbojets are?',
      options: ['Thermocouples.', 'Based on metallic parts whose expansion/contraction is measured.', 'Based on metallic conductors whose resistance increases linearly with temperature.', 'Capacitors whose capacity varies proportionally with temperature.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_029',
      question: 'The red pointer which is normally on the red line on the EGT (Exhaust Gas) indicators?',
      options: ['Allows the display of the parameter value to be adopted during take-off.', 'Shows the vibration level of the engine under consideration.', 'Moves when the corresponding value is exceeded and remains positioned at the maximum value that has been reached.', 'Shows the limit value not to be exceeded.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_030',
      question: 'A Full Authority Digital Engine Control (FADEC) has the following functions:\n\n 1. Flow regulation (fuel, decelerations and accelerations monitoring).\n 2. Automatic starting sequence.\n 3. Transmissions of engine data to the pilot’s instruments.\n 4. Thrust management and protection of operation limits.\n 5. Monitoring of the thrust reversers.\n\nThe combination regrouping all the correct statements is ?',
      options: ['1, 3, 4, 5.', '1, 2, 3, 4, 5.', '2, 4, 5.', '1, 3, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_031',
      question: 'The operating principle of the “induction” type of tachometer is to measure the?',
      options: ['Electromotive force (EMF) produced by a dynamo or an alternator.', 'Frequency of the electric impulse created by a notched wheel rotating in a magnetic field.', 'Magnetic field produced by a dynamo or an alternator.', 'Rotation speed of an asynchronous motor energized by an alternator.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_032',
      question: 'The operating principle of an “electronic” tachometer is to measure the?',
      options: ['Rotation speed of an asynchronous motor energized by an alternator.', 'Magnetic field produced by a dynamo or an alternator.', 'Frequency of the electric impulse created by a notched wheel rotating in a magnetic field.', 'Electromotive force (EMF) produced by a dynamo or an alternator.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_033',
      question: 'In a 3-phase synchronous motor type tachometer indicator :\n\n 1. The transmitter is a direct current generator.\n 2. The voltage is proportional to the transmitter drive speed.\n\n 3. The frequency is proportional to the transmitter drive speed.\n 4. The speed indicating element is a galvanometer.\n 5. The speed indicating element is a synchronous motor driving a magnetic tachometer.\n\nThe combination regrouping all the correct statements is ?',
      options: ['3, 5.', '1, 2.', '2, 5.', '1, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_034',
      question: 'The two main sources of information used to calculate turbojet thrust are the?',
      options: ['Fan rotation speed (or N1) or the total pressure at the low pressure turbine outlet.', 'Fan rotation speed (or N1) or the EPR (Engine Pressure Ratio).', 'High pressure turbine rotation speed or the EPR (Engine Pressure Ratio).', 'Fan rotation speed (or N1) or the total pressure at the high pressure compressor outlet.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_035',
      question: 'To permit turbine exit temperatures to be measured, gas turbines are equipped with thermometers which work\non the following principle?',
      options: ['Gas pressure.', 'Thermocouple.', 'Bi-metallic strip.', 'Liquid expansion.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_036',
      question: 'On an aeroplane equipped with a constant speed propeller, the RPM indicator enables?',
      options: ['Control of power.', 'Selection of engine RPM.', 'On a twin-engine aeroplane, automatic engine synchronization.', 'Control of the propeller regulator and the display of propeller RPM.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_037',
      question: 'Torque can be determined by measuring the?',
      options: ['Oil pressure at the fixed crown of an epicycloidal reducer of the main engine gearbox.', 'Phase difference between 2 impulse tachometers attached to a transmission shaft.', 'Frequency of an impulse tachometer attached to a transmission shaft.', 'Quantity of light passing through a rack-wheel attached to a transmission shaft.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_038',
      question: 'What type of sensor is employed to measure compressor air inlet temperature in a typical turbojet engine fuel\nsystem?',
      options: ['Temperature probe.', 'Mercury thermometer.', 'Alcohol thermometer.', 'Optical pyrometer.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_039',
      question: 'A millimetric voltmeter measuring the PD across the hot and cold junctions of a thermocouple, can be calibrated\nto indicate temperature by ?',
      options: ['The cold junction is kept at absolute zero.', 'The cold junction is kept a zero degree Celsius.', 'The cold junction temperature is known.', 'The cold junction is kept at a constant temperature.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_040',
      question: 'The electrical supply for a basic thermocouple system is?',
      options: ['Provided by a dedicated transformer.', 'Provided from the essential services busbar.', 'Self generated by the SEEBECK effect.', 'Self generated by the inducive reactance method.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_041',
      question: 'Cylinder head temperature on a piston engine is measured using a ……on the ……?',
      options: ['Thermocouple coolest cylinder.', 'Resistive element hottest cylinder.', 'Resistive element exhaust manifold.', 'Thermocouple hottest cylinder.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_042',
      question: 'Temperature is measured in aircraft engines by means of?\n\n 1. Thermocouples.\n 2. Mercury.\n 3. Resistive elements.\n 4. Capacitive elements.',
      options: ['1, 2.', '2, 3.', '3, 4.', '1, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_043',
      question: 'If one of the probes in a typical gas turbine engine EGT system becomes defective, the indications would be ?',
      options: ['Too high.', 'Too low.', 'Not significantly affected', 'Lost.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_044',
      question: 'Cylinder head temperature measurement systems typically work on the …… principle?',
      options: ['Thermocouple.', 'Resistive.', 'Capacitive.', 'Thermal expansion (bi-metal strip).'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_045',
      question: 'Thermocouples are?',
      options: ['Two dissimilar metals connected at one point.', 'Two dissimilar metals connected at two points.', 'Two dissimilar metals separated by a dielectric material.', 'Two similar metals connect at two points.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_046',
      question: 'Jet engine exhaust gas temperature is measured using?',
      options: ['A thermocouple.', 'A number of thermocouples connected in series.', 'A number of thermocouples connected in parallel.', 'A thermistor.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_047',
      question: 'The pointer that aligns with the red line on a EGT gauge?',
      options: ['Indicates maximum temperature.', 'Is movable and indicates maximum temperature exceeding the red line.', 'Is adjustable to permit different limits to be set as required.', 'Is adjustable to permit higher limits to be set when taking-off at high mass in high ambient temperatures.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_048',
      question: 'A temperature gauging system employing thermocouples can be graduated to indicate temperature by?',
      options: ['By keeping the cold junction at 15 degrees Celsius.', 'By keeping the hot junction above 15 degrees Celsius.', 'By keeping the cold junction at a constant temperature.', 'By protecting the hot junction from high temperatures.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_049',
      question: 'Which of the following is used to measure temperature ?\n\n 1. The seebeck effect.\n 2. The variation of electrical resistance with changes in temperature.\n 3. The variation of capacitance with changes in temperature.\n 4. Thermal expansion of liquids and solids.',
      options: ['1, 2, 3.', '1, 3, 4.', '1, 3, 4.', '1, 2, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins09_050',
      question: 'A cylinder head temperature gauge measures?',
      options: ['All of the cylinders and sums the result.', 'All of the cylinders and averages the result.', 'The coolest cylinder only to preserve the sensor.', 'The hottest cylinder only. FANS AND ACARS'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins10: [
    {
      id: 'ins10_001',
      question: 'The notification phase (LOG ON) is a FANS application which consists in transmitting aircraft information and:',
      options: ['Transmitting datalink messages between the pilot and ATC controller.', 'Sending automatically aircraft surveillance data to the ATC controller.', 'Requesting transfer datalink communication to the next ATC centre on the route.', 'Establishing air/ground connection to verify if the datalink communication can be performed.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_002',
      question: 'The CPDLC consist in exchanging messages relative to :\n\n 1. Route modification.\n 2. Crossing constraints.\n 3. Transfer of ATC centre.\n 4. Speed changes.\n\nThe combination regrouping all of the correct statements is :',
      options: ['3', '2, 4.', '1, 3, 4', '1, 2, 3, 4'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_003',
      question: 'The systems that can be connected to the communication management unit (CMU) are :\n\n 1. EGPWS.\n 2. HF communications unit.\n 3. Multipurpose control and display unit (MCDU).\n 4. VHF communications unit.\n 5. Satcom.\n\nThe combination that regroups all of the correct statements is :',
      options: ['2, 3, 4, 5.', '2, 4, 5.', '1, 3, 4.', '1, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_004',
      question: 'The basic on-board datalink communications system is typically composed of the following sub systems:\n\n 1. Communications management unit (CMU).\n 2. Multi purpose control and display unit (MCDU).\n 3. Communications Unit (VHF, HF, Satcom).\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 2, 3.', '1, 3.', '1, 2.', '2, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_005',
      question: 'The different types of ADS contracts can be :\n\n 1. Periodic at periodic time intervals.\n 2. On demand when asked by the ATC.\n 3. On event whenever a specified event occurs.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 2, 3.', '1, 3.', '1, 2.', '2, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_006',
      question: 'The systems that can be connected to the communication management unit (CMU) are :\n\n 1. Flight Director.\n 2. FMS.\n 3. Multipurpose control and display unit (MCDU).\n 4. Communications unit (VHF, HF, Satcom).\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 3, 4.', '2, 3.', '2, 4.', '2, 3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_007',
      question: 'The CPDLC messages may concern :\n\n 1. Route modification.\n 2. Speed changes.\n 3. Voice contact request.\n 4. Emergency messages.\n\nThe combination regrouping all of the correct statements is :',
      options: ['1, 2, 4.', '3, 4.', '1, 2.', '1, 2, 3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_008',
      question: 'The on-board communication devices to transmit and receive datalink communications can be :\n\n 1. VHF COM.\n 2. HF COM.\n 3. SATCOM.\n\nThe combination that regroups all of the correct statements is :',
      options: ['3', '1, 2', '1, 2, 3', '1'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_009',
      question: 'The datalink communications between the aircraft and the ground can be performed by the following systems:',
      options: ['ACARS.', 'EGPWS.', 'TCAS.', 'CVR.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_010',
      question: 'A MAYDAY datalink message can be sent to the ATC via the :',
      options: ['AFN application.', 'CPDLC application.', 'ADS application.', 'ACAS (Aircraft Collision Avoidance System) application.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_011',
      question: 'The ACARS allows air/ground datalink communications for:',
      options: ['Airline Operational Communications and Air Traffic Communications (AOC & ATC).', 'Airline Operational Communications only (AOC).', 'Airline Operational Communications and Public Communications (AOC & PC).', 'Air Traffic Communications only (ATC).'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_012',
      question: 'A D-ATIS is :',
      options: ['An ATIS message broadcast on HF when out of the VHF radio range from the airport.', 'A short ATIS that only includes parameters that have changed from previous ATIS record.', 'A diversion ATIS for the alternate airport.', 'An ATIS message received by datalink.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_013',
      question: 'The FANS concept includes :',
      options: ['An enhanced detection of the intruding traffic.', 'An improvement in the accuracy of the navigation systems aiming to carry out RNAV approaches.', 'An enhanced detection of the nearby terrain.', 'A datalink communication between the aircraft and the ATC centres to replace the voice communications.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_014',
      question: 'The ADS is a FANS application performed :',
      options: ['Semi-automatically, the pilot has to define the set of data to downlink but cannot define the type of contract.', 'Semi-automatically, the pilot cannot define the set of data to downlink but can define the type of contract.', 'Manually, the pilot has to define the set of data to downlink and the type of contract.', 'Automatically, without any crew action to define the set of data of downlink or the type of report contract.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_015',
      question: 'When sent, a MAYDAY datalink message to the ATC has the following effect on ADS.',
      options: ['The ADS current contract is stopped.', 'No change to the ADS current contract in process.', 'The ADS contract is switched to high periodic reporting rate.', 'The ADS current contract reporting rate is unchanged but includes more data.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_016',
      question: 'The ground routing of the ATC Datalink communications is performed :',
      options: ['By each ATC local network of the FIR airspace where the aircraft flies.', 'By the airline ground network interconnected to the ATC network.', 'By the GSM (mobile phone) providers interconnected to provide continuity of service.', 'By service providers (SITA, ARINC) that can be interconnected to provide continuity of transmissions.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_017',
      question: 'The following ATC clearances can be received via the datalink application :',
      options: ['Departure, Take-off, En-route.', 'Departure, En-route, Landing.', 'Take- off, En-route, Landing.', 'Departure, Oceanic.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_018',
      question: 'The CPDLC is a FANS application which consists of ;',
      options: ['Sending automatically aircraft surveillance data to the air traffic controller', 'Transmitting datalink formatted messages between the pilot and ATC controllers.', 'Establishing air/ground connections to verify if the datalink communications can be performed.', 'Connecting the aircraft to the associated ATC centre.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_019',
      question: 'Comparing the media used to transmit datalink communications, the appropriate classification from the slowest\nto the fastest transmission rate is :',
      options: ['HF datalink, VHF datalink, SATCOM.', 'HF datalink, SATCOM, VHF datalink.', 'SATCOM, HF datalink, VHF datalink.', 'SATCOM, vhf datalink, VHF datalink.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_020',
      question: 'The notification phase (LOG ON) is a FANS application which consists in transmitting aircraft information and\n;',
      options: ['Associated datalink capabilities, prior to operating any datalink communications with ATC.', 'Park stand to the airport pre-flight controller to request the datalink pre-departure clearance (PDC).', 'Aircraft position to request the datalink clearance to enter airspace.', 'Aircraft position to the airport ground controller'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_021',
      question: 'The ADS is a FANS application which consists of :',
      options: ['Connecting the aircraft to the associated ATC centre.', 'Transmitting datalink formatted messages between the pilot and ATC controllers.', 'Sending automatically aircraft surveillance data to the air traffic controller', 'Establishing air/ground connections to verify if the datalink communications can be performed.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_022',
      question: 'In a datalink system, the uplink communications consist in transmitting data :',
      options: ['From the flight deck to the cabin.', 'From the ground to the aircraft.', 'From the aircraft to the airline maintenance.', 'From the aircraft to the ground.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_024',
      question: 'The characteristics of the SATCOM transmissions, used for datalink communications are :',
      options: ['No line of sight limitation, no variable quality of signals distributed by ionospheric conditions.', 'Line of sight limitation, no variable quality of signals distributed by ionospheric conditions.', 'No line of sight limitation, variable quality of signals depending on ionospheric conditions.', 'Line of sight limitation, variable quality of signals depending on ionospheric conditions.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins10_025',
      question: 'The CPDLC consist in exchanging messages relative to :\n\n 1. Route modification.\n 2. Crossing constraints.\n 3. Transfer of ATC centre.\n 4. Speed changes.\n\nThe combination regrouping all of the correct statements is :',
      options: ['3, 4.', '1, 2, 3, 4.', '1, 2.', '1, 3, 4. FLIGHT DIRECTOR'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins11: [
    {
      id: 'ins11_001',
      question: 'Concerning the command bars of a flight director :',
      options: ['The autopilot must first be engaged before removing them.', 'It is possible to remove them by switching the flight director off.', 'It is not possible to remove them on some aircraft.', 'The autopilot must be engaged to remove them.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_002',
      question: 'The position of the command bars of a flight director enables the pilot to know :\n\n 1. The direction and the amplitude of the corrections to apply to the controls.\n 2. Only the direction of the corrections to apply to the controls.\n 3. The attitude of the aircraft.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1', '1, 3.', '2, 3.', '2.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_003',
      question: 'The flight director computer continuously :',
      options: ['Compares the computed attitude with the EGPWS signals.', 'Computes the required attitude for the autopilot synchronized attitude.', 'Compares the computed attitude with the ACAS signals.', 'Compares the current attitude with the computed altitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_004',
      question: 'During a final approach, the flight director is engaged in the LOC mode (holding localizer axis). If the\nhorizontal command bar is deviating upwards, it means that :',
      options: ['The aircraft is above the glide slope.', 'The aircraft is below the glide slope.', 'The pitch attitude must be increased.', 'The pitch attitude must be decreased.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_005',
      question: 'During a final approach, the flight director is engaged in the LOC mode (holding localizer axis). If the vertical\ncommand bar is deviating to the left, it means that the aircraft :',
      options: ['Must be rolled to the right.', 'Is right of the LOC axis.', 'Is left of the LOC axis.', 'Must be rolled to the left.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_006',
      question: 'Considering a flight director of the command bars type :',
      options: ['The vertical bar is associated with the pitch channel.', 'The vertical bar may be associated with the pitch channel.', 'The horizontal bar is associated with the pitch channel.', 'The horizontal bar is associated with the roll channel.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_007',
      question: 'The flight director bars provide the pilot with corrections to apply to :',
      options: ['Pitch and roll attitude and yaw.', 'Pitch and roll attitude.', 'Pitch attitude only.', 'Roll attitude only.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_008',
      question: 'Considering a flight director of the command bars type :\n\n 1. The vertical bar is always associated with the roll channel.\n 2. The vertical bar is always associated with the pitch channel.\n 3. The horizontal bar may be associated with the roll channel.\n 4. The horizontal bar is always associated with the pitch channel.\n\nThe combination regrouping all of the correct statements is :',
      options: ['1, 2, 4.', '1, 3, 4.', '1, 2, 3, 4.', '1, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_009',
      question: 'On a modern aircraft, the flight director modes are displayed on the ?',
      options: ['Control panel of the flight director only.', 'Upper strip of the PFD (Primary Flight Display).', 'Upper strip of the ND (Navigation Display).', 'Upper strip of the ECAM (Electronic Centralized A/C Management).'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_010',
      question: 'The essential components of a flight director are :\n\n 1. A computer.\n 2. An automatic pilot.\n 3. An autothrottle.\n 4. Command bars.\n\nThe combination of correct statements is ?',
      options: ['2, 4.', '2, 3.', '1, 4.', '1, 2.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_011',
      question: 'The aim of the flight director is to provide information to the pilot ?',
      options: ['Allowing him to return to a desired path according to a 45° intercept angle.', 'Allowing him to return to a desired path according to a 30° intercept angle.', 'Allowing him to return to a desired path in an optimal way.', 'About his position with regard to a radio-electric axis.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_012',
      question: 'Flight Director Information supplied by an FD computer is presented in the form of command bars on the\nfollowing instrument ?',
      options: ['ADI Attitude Display Indicator.', 'BDHI Bearing Distance Heading Indicator.', 'RMI Radio Magnetic Indicator.', 'HIS Horizontal Situation Indicator.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_013',
      question: 'The “heading hold” mode is selected on the flight director (FD) with a course to steer of 180°. Your aircraft\nholds a heading of 160°. The vertical bar of the FD?',
      options: ['Cannot be centred.', 'Is centred if the aircraft is on optimum path to join heading 180°.', 'Is centred if the aircraft has starboard drift of 20°.', 'Is centred if the aircraft has s port drift of 20°.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_014',
      question: 'The Flight Director bars are ?',
      options: ['Always visible in flight.', 'Always visible in automatic flight.', 'Sometimes visible in automatic flight.', 'Never visible in automatic flight.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_015',
      question: 'After having programmed your flight director, you see that the indications of your ADI (Attitude Director\nIndicator) are as represented in diagram below. On this instrument, the command bars indicate that you must\nbank your airplane to the left and?',
      options: ['Increase the flight attitude until the command bars recentre on the symbolic airplane.', 'Decrease the flight attitude until the command bars recentre on the symbolic airplane.', 'Increase the flight attitude until the command bars recentre on the horizon.', 'Decrease the flight attitude until the command bars recentre on the horizon.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_016',
      question: 'The command bars of a flight director are generally represented on an?',
      options: ['HIS (Horizontal Situation Indicator).', 'RMI (Radio Magnetic Indicator).', 'ILS (Instrument Landing System).', 'ADI (Attitude Director Indicator).'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_017',
      question: 'An aeroplane is equipped with a Flight Director (with a crosshair trend bars), heading 270°, in HDG mode\n(heading hold). A new heading, of 360°, is selected the vertical trend bar?',
      options: ['Deviates to its right stop as long as the aeroplane is more than 10° off the new selected heading.', 'Deviates to the right and will be centred as soon as you roll the aircraft to the bank angle calculated by the flight director.', 'Deviates to the right and remains in that position until the aircraft has reached heading 360°.', 'Disappears, the new heading selection has deactivated the HDG mode.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_018',
      question: 'The flight director indicates the ?',
      options: ['Optimum path at the moment it is entered to reach a selected radial.', 'Path permitting reaching a selected radial in minimum time.', 'Path permitting reaching a selected radial over a minimum distance.', 'Optimum instantaneous path to reach selected radial.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_019',
      question: 'The position of a Flight Director command bars?',
      options: ['Indicates the manoeuvers to execute, too achieve or maintain a flight situation.', 'Repeats the ADI and HIS information.', 'Enables the measurement of deviation from a given position.', 'Only displays information relating to radio-electric deviation.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_020',
      question: 'After having programmed your flight director, you see that the indication of your ADI (Attitude Director\nIndicator) are as represented in diagram below. On this instrument, the command bars indicate that you must?',
      options: ['Increase the flight attitude and bank your airplane to the left until the command bars recentre on the symbolic aeroplane.', 'Increase the flight attitude and bank your aeroplane to the right until the command bars recentre on the symbolic aeroplane.', 'Decrease the flight attitude and bank your airplane to the left until the command bars recentre on the symbolic aeroplane.', 'Decrease the flight attitude and bank your airplane to the right until the command bars recentre on the symbolic aeroplane.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_021',
      question: 'What commands are being indicated by the flight director below ?',
      options: ['Go down and right.', 'Go up and left.', 'Go down and left.', 'Go up and right.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_022',
      question: 'What commands are being indicated by the flight director below ?',
      options: ['Go down and right.', 'Go up and left.', 'Go down and left.', 'Go up and right.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_023',
      question: 'What commands are being indicated by the flight director below ?',
      options: ['Go down and right.', 'Go up and left.', 'Go down and left.', 'Go up and right.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_024',
      question: 'An aircraft is flying on a heading of 275° and the autopilot is in the heading select mode. What will the flight\ndirector command bars do if heading is changed to 350°?',
      options: ['The roll bar will move to the right until the AFDS angle of bank required to intercept is achieved. The bar will ten centralise.', 'Roll bar moves hard right then gradually centralizes as the difference between actual heading and selected heading reduces.', 'Roll bar moves left until the actual heading matches the selected heading.', 'The roll bar does not move, but the system automatically regains the selected heading.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_025',
      question: 'Flight director modes are displayed?',
      options: ['On the EFIS primary flight display.', 'On the EFIS nav display.', 'On EICAS or ECAM.', 'On the flight director control panel'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_026',
      question: 'What command are being indicated by the Flight Director below.',
      options: ['Go up and right.', 'Go up and left.', 'Go down and right.', 'Go down and left.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_027',
      question: 'On which instrument are the FD bars normally displayed?',
      options: ['EFIS ND.', 'EFIS PFD.', 'EICAS or ECAM.', 'PPI.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_028',
      question: 'When will the ADI vertical bar become centralized with 180 degrees is selected when flying on a heading of\n160 degrees?',
      options: ['When at the correct attitude to intercept 180 degrees.', 'When on a heading of 180 degrees.', 'When on a heading of 160 degrees.', 'When within 20 degrees of 180 degrees.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_029',
      question: 'Having programmed the flight director,, a pilot observes that the ADI indications are as illustrated in the\ndiagram below. The command bars indicate that the aircraft should?',
      options: ['Bank left and increase no up attitude until the bars centralise.', 'Bank left and decrease nose up attitude until the bars centralise.', 'Bank right and increase nose up attitude until the bars centralise.', 'Bank right and decrease nose up attitude until the bars centralise.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_030',
      question: 'If heading is set to 180 degrees when the aircraft is stable on 160 degrees, what will happene to the vertical bar\non the flight director?',
      options: ['Move left.', 'Move right.', 'Move down.', 'Remain central.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_031',
      question: 'Where are the flight director modes displayed?',
      options: ['EFIS ND.', 'EFIS PFD.', 'EICAS/ECAM.', 'FD controller.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins11_032',
      question: 'How will the FD bars respond if a heading of 350 degrees is selected, when the aircraft with heading hold\nengaged is in steady light on a heading of 270 degrees?',
      options: ['Move right until the turn command is executed, then centralise until a heading of about 340 degrees is reached, when it will move left to execute a roll out.', 'Move right until on 350 degrees then centralise.', 'Move right until on heading 260 degrees then move left to regain 350 degrees.', 'Move right temporarily then quickly centralise. FMS'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins12: [
    {
      id: 'ins12_001',
      question: 'The validity period of the permanent data base of the aeronautical information stored in the database of the FMS\nis :',
      options: ['14 days.', '1 calendar month.', '2 calendar months.', '28 days.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_002',
      question: 'The FMS navigation database include the following data:\n\n 1. Airports.\n 2. Take – off speeds.\n 3. Navaids.\n 4. Relief.\n 5. Runways.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 2, 3.', '1, 3, 5.', '1, 2, 5.', '3, 4, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_003',
      question: 'The FMS vertical navigation management is generally performed based on :',
      options: ['The barometric altitude input from the ADC.', 'A mix of barometric and GPS altitudes.', 'The GPS altitude computed by the GPS receiver.', 'The geometric altitude input from the terrain awareness and warning system (TAWS).'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_004',
      question: 'When engaged in the FMS lateral navigation mode (LNAV) the autopilot uses:',
      options: ['The roll or heading command computed by the FMS.', 'The FMS computation of the aircraft position and the FMS active (TO) waypoint bearing.', 'The path angle command computed by the FMS.', 'The FMS active (TO) waypoint coordinates.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_005',
      question: 'The FMS cross track (XTK) is :',
      options: ['The distance error between the FMS computed position and the IRS computed position.', 'The angular distance error, to the left or right from the desired track (DTK) to the aircraft track (TK).', 'The abeam distance error, to the left or right from the desired flight plan leg of the aeroplane.', 'The distance error between the FMS computed position and the GPS computed position.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_006',
      question: 'The FMS provides the following functions :\n\n 1. Aid to fuel management.\n 2. Lateral flight plan management.\n 3. Check list completion.\n 4. Aircraft position computation.\n\nThe combination that regroups all of the correct statements is :',
      options: ['2, 3.', '3, 4.', '1, 2, 3.', '1, 2, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_007',
      question: 'The FMS navigation database includes the following data :\n\n 1. Obstacles.\n 2. NAVAIDS.\n 3. SID, STARS and approach procedures.\n 4. Waypoints.\n 5. Airways.\n\nThe combination regrouping all of the correct statements is :',
      options: ['1, 2, 4.', '2, 3, 4, 5', '1, 3, 4.', '1, 2, 3, 4, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_008',
      question: 'For a FMS designed with vertical navigation (VNAV) capability, coupled to the autopilot, the FMS vertical\ncommand output can be :\n\n 1. An angle of attack.\n 2. A flight path.\n 3. A speed target.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 3.', '2,', '2, 3.', '3'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_009',
      question: 'The FMS navigation database includes the following :\n\n 1. Airports.\n 2. Obstacles.\n 3. Navaids.\n 4. Airways.\n 5. Relief.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 3, 4.', '2, 5.', '1, 3, 4, 5.', '1, 2, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_010',
      question: 'The most common sensors interfacing a FMS to compute the aircraft position along the flight plan are :\n\n 1. GPS.\n 2. NDB.\n 3. DME.\n 4. Localiser.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 2, 3.', '1, 3.', '2, 3.', '1, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_011',
      question: 'The flexible take-off mode :\n\n 1. Can be used only if the engines are recent.\n 2. Reduces engine wear.\n 3. Can be used in situations where take-off can be executed without the need for full engine power.\n 4. Can only be used with an auto-throttle.\n\nThe combination that regroups all of the correct statements is.',
      options: ['2, 3, 4.', '1, 2, 3.', '2, 3.', '1, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_012',
      question: 'Concerning the flexible take-off mode, the temperature selected in the FMS is :',
      options: ['High than the ambient temperature in order to achieve an increased power setting.', 'Lower than the ambient temperature in order to achieve a reduced power setting.', 'Lower than the ambient temperature in order to achieve an increased power setting.', 'Higher than the ambient temperature in order to achieve a reduced power setting.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_013',
      question: 'The FMS lateral offset function consists of :',
      options: ['Flying along the flight plan legs with a constant right or left offset manually entered on the FMS CDU.', 'Flying a FMS selected lateral pattern used for search and rescue operations.', 'Creating a new waypoint using a reference flight plan waypoint and a distance from this waypoint along the flight plan legs.', 'Displaying lateral cross track deviation (XTK) of the aircraft according to the active flight plan leg.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_014',
      question: 'Some of the FMS have a navigation mode called Dead Reckoning Mode (DR), computing airspeed, heading,\nwind data, ground speed and time. This mode is :',
      options: ['The normal navigation mode for FMS, which does not use Inertial Navigation Systems (INS) to compute aircraft position.', 'A back up navigation mode to compute a FMS position when the other navigation sensors are no longer operating.', 'An operating mode used to monitor the FMS position.', 'An operating mode used to intercept radials To and From a flight plan waypoint.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_015',
      question: 'When two waypoints are entered on the FMS flight plan page, a track between the two fixes is computed and\ncan be displayed on the navigation map display (ND). This leg created is :',
      options: ['A rhumb line.', 'Two great circle arcs joined by a straight line segment.', 'Two rhumb lines joined by a straight line segment.', 'A great circle arc.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_016',
      question: 'The “overfly” symbol related to a waypoint on an FMS page indicates that :',
      options: ['The aircraft is required to pass directly over this waypoint.', 'A turn anticipation is permitted.', 'A fuel prediction is given at this waypoint.', 'A time estimate is required to be given for this waypoint'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_017',
      question: 'The FMS Required Time Of Arrival (RTA) function can provide :',
      options: ['A speed target to satisfy a time constraint entered at a flight plan waypoint.', 'A time prediction at the flight plan waypoints based on the current speed and speed constraints along the flight plan.', 'A time prediction at the active TO waypoint complying with wind computation.', 'A time slot computed for the arrival time at destination, using the current aircraft speed and speed constraints along the flight plan.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_018',
      question: 'The Fuel management performed by most FMS along the flight plan is considered as :',
      options: ['The prime source to manage the fuel consumption along the flight.', 'A function which helps the crew to estimate the remaining fuel quantity along the flight plan, but should not be considered as an accurate and reliable source.', 'An accurate and very reliable function providing that the fuel on board quantity has been properly initialized by the crew before start up.', 'An accurate and very reliable function, which can be considered as the prime source to determine the remaining fuel quantity for the flight.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_019',
      question: 'The duration of a FMS navigation database loaded before expiring is :',
      options: ['15 days.', '28 days.', '3 months.', '2 months.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_020',
      question: 'The role of the FMS is to :\n\n 1. Aid the crew with navigation.\n 2. Shut down the engine in case of a malfunction.\n 3. Automatically avoid conflicting traffic when autopilot engaged.\n 4. Reduce crew workload.\n 5. Aid fuel efficiency.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 2, 3.', '2, 3, 4, 5.', '1, 4, 5.', '1, 3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_021',
      question: 'The role of the FMS is to aid the flight crew with:\n\n 1. Immediate actions in case of emergency procedure.\n 2. Navigation.\n 3. In-flight performance optimization.\n 4. Electronic check lists.\nThe combination that regroups all of the correct statements is :',
      options: ['2, 3.', '2, 3, 4.', '1, 2.', '3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_022',
      question: 'The FMS FLIGHT PLAN or LEG page displays the following parameters relative to the flight plan legs or\nwaypoints :\n\n 1. Track.\n 2. Magnetic variation.\n 3. Waypoint elevation.\n 4. Speed.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 4.', '3, 4.', '1, 3.', '1, 2, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_023',
      question: 'For most FMS the fuel prediction function, which computes the remaining fuel along the flight plan, takes into\naccount the following situations :\n\n 1. The additional drag resulting if a flight is carried out with the landing gear extended.\n 2. The current wind computed or the resulting ground speed.\n 3. The additional drag resulting if a flight is carried out with the flaps stuck, partially extended.\n\n 4. The drag resulting with a missing fuselage or wing element in compliance with the CDL.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 3.', '2.', '3.', '4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_024',
      question: 'For most FMS the fuel prediction function, which computes the remaining fuel along the flight plan, takes into\naccount the following situations :\n\n 1. The additional drag resulting if a flight is carried out with the landing gear extended.\n 2. The drag resulting with a missing fuselage or wing element in compliance with the CDL.\n 3. The additional drag resulting if a flight is carried out with the flaps stuck, partially extended.\n 4. The current wind computed or the resulting ground speed.\n\nThe combination that regroups all of the correct statements is :',
      options: ['3.', '4.', '1, 3, 4.', '1, 2.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_025',
      question: 'The FMS provides the following functions :\n\n 1. Traffic advisory management.\n 2. Resolution advisory management.\n 3. Aid for fuel management.\n 4. Lateral flight plan management.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 4.', '1, 3, 4.', '3, 4.', '1, 2, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_026',
      question: 'The purpose of the FMS temperature compensation function is :',
      options: ['To provide the destination airport or runway elevation.', 'To provide compensated temperatures at the waypoints along the vertical approach profile.', 'To adjust for the difference between CAS and TAS caused by non-standard temperatures.', 'To provide compensated altitudes for temperatures different from standard atmosphere along the vertical approach profile.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_027',
      question: 'When engaged in the FMS lateral navigation mode (LNAV) the autopilot uses the commands provided by the :',
      options: ['Track Selector.', 'VOR or Localiser Receiver.', 'VOR Receiver.', 'FMS.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_028',
      question: 'The FMS provides the following functions :\n\n 1. Vertical flight plan management.\n 2. Aid for fuel management.\n 3. Lateral flight plan management.\n 4. Terrain awareness warning.\n\nThe combination regrouping all of the correct statements is :',
      options: ['1, 2, 4.', '1, 2, 3.', '2, 3, ,4.', '1, 3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_029',
      question: 'The FMC determines and updates present aircraft position from the following systems :\n\n 1. GPS.\n 2. IRS.\n 3. Navigation radios.\n 4. ACARS.\n\nThe combination that regroups all of the correct statements is :',
      options: ['3.', '1, 2, 3.', '1, 2, 4.', '1, 2, 3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_030',
      question: 'The FMC determines and updates present aircraft position from the following systems :\n\n 1. SATCOM\n 2. GPS.\n 3. DME.\n 4. IRS.\n\nThe combination that regroups all of the correct statements is :',
      options: ['2, 3, 4.', '1, 3.', '1, 2, 4.', '2, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_031',
      question: 'The FMS FLIGHT PLAN or LEG page displays the following parameters relative to the flight plan legs or\nwaypoints :\n\n 1. Aircraft position (long/lat).\n 2. Speed.\n 3. Distance.\n 4. Track.\n\nThe combination that regroups all of the correct statements is :',
      options: ['2, 3, 4.', '1, 3, 4.', '1, 2.', '1, 2, 3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_032',
      question: 'The FMS provides the following functions :\n\n 1. Lateral and vertical flight plan management.\n 2. De-icing management.\n 3. Aircraft position management.\n 4. Terrain awareness and warning.\n\nThe combination regrouping all of the correct statements is :',
      options: ['1, 3.', '1, 2, 3.', '1, 3, 4.', '4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_033',
      question: 'The FMS navigation database includes the following data :\n\n 1. Obstacles.\n 2. Waypoints.\n 3. SID, STARS.\n 4. Relief.\n 5. Magnetic variation.\n\nThe combination regrouping all of the correct statements is :',
      options: ['1, 3, 5.', '1, 2, 3.', '1, 2, 4.', '2, 3, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_034',
      question: 'An FMS database is valid for?',
      options: ['7 days.', '28 days.', '56 days.', 'It depends upon operational area.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_035',
      question: 'The JAR 25 standard colour for an FMS active planned route is ?',
      options: ['Cyan.', 'Magenta.', 'Red.', 'White.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_036',
      question: 'The inputs to the FMS include?\n\n 1. Air data computer information.\n 2. Route data.\n 3. Radio aids information.\n 4. Power plant data.\n 5. Operating data.',
      options: ['1, 2, 3, 4, 5.', '1, 3, 4, 5.', '2, 3, 4, 5.', '1, 2, 3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_037',
      question: 'What is the first page on an FMS CDU?',
      options: ['INDEX.', 'IDENT.', 'TAKE-OFF.', 'PRE-START.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_038',
      question: 'Setting zero cost index on an FMS gives?',
      options: ['Best range.', 'Best time.', 'Best endurance.', 'Lowest total costs.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_039',
      question: 'Valid FMS CDU waypoint entries include ?\n\n 1. Runway number.\n 2. Navaid limitations.\n 3. Airport ICAO identifier.\n 4. Navaid identifier.\n 5. Waypoint name.\n 6. Country code.',
      options: ['1, 2, 3, 4.', '1, 3, 4, 5.', '1, 4, 5, 6.', '2, 3, 4, 6.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_040',
      question: 'The inputs to an FMS include?\n\n 1. Operating data.\n 2. Terminal data.\n 3. Air data.\n 4. Route data.\n 5. Engine data.\n 6. Radio aids data.',
      options: ['1, 2, 3, 4.', '2, 3, 4, 5.', '3, 4, ,5, 6.', 'All of the above.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_041',
      question: 'With reference to an FMS, what does the term managed guidance mean?',
      options: ['The INS gives commands to the autopilot.', 'The FMC gives commands to the autopilot.', 'The autopilot gives commands to the FMC.', 'The term managed guidance is not related to FMS.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_042',
      question: 'What would be the FMC displayed position in an aircraft equipped with a twin inertial system and DME?',
      options: ['Identical to the primary inertial system position.', 'The mean of the radio fix position and the primary inertial position.', 'The mean between the radio fix and the mean of the two inertial positions.', 'The mean of the two inertial positions.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_043',
      question: 'What happens if an FMC that autotunes to DME stations for fixing purposes, does not receive a satisfactory\ndecode?',
      options: ['The beacon frequency will be displayed instead of its identifier.', 'The MCDU will display a warning message.', 'The identifier codes are retrieved from memory and displayed in red.', 'Alternative DME’s are selected and employed.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_044',
      question: 'A cost index is?',
      options: ['An FMS output code.', 'An FMS input code telling the FMS the required balance between optimizing fuel costs and sector time.', 'A fixed code giving the best fuel efficiency for each aircraft type.', 'A fixed code giving best fuel efficiency for each route.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_045',
      question: 'What happens if an FMC operating in VNAV and LNAV modes reaches a waypoint beyond which no route has\nbeen input?',
      options: ['The aircraft circles the waypoint until commanded to do otherwise.', 'The aircraft returns to the previous waypoint.', 'The system reverts to heading mode.', 'The autopilot will disconnect and a warning will be sounded and illuminated on EICAS/ECAM.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins12_046',
      question: 'The flight control unit in an FMS?',
      options: ['Control vertical flight paths.', 'Controls lateral flight paths.', 'Control all flight paths.', 'Controls only heading. FUEL'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins13: [
    {
      id: 'ins13_001',
      question: 'The disadvantages of a float type fuel gauge are :\n\n 1. The design is complex.\n 2. The indications are influenced by aircraft attitude variations.\n 3. The indications are influenced by accelerations.\n 4. The indications are influenced by temperature variations.\n\nThe combination regrouping all of the correct statements is :',
      options: ['2, 3, 4.', '2, 3.', '1.', '1, 2, 3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins13_002',
      question: 'The disadvantages of a float type fuel gauging system include inaccuracies due to?\n\n 1. Changes in aircraft attitude.\n 2. Acceleration.\n 3. Ambient pressure changes.\n 4. Ambient temperature changes.',
      options: ['1, 2, 3.', '1, 2, 4.', '2, 3, 4.', '1, 3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins13_003',
      question: 'A capacitive fuel gauging system measures?',
      options: ['Changes in capacitance of the fuel.', 'Changes in capacitance due to variations in the proportion of sensors immersed in fuel.', 'Changes in capacitance of fuel due to density changes.', 'Changes in dielectric constant of fuel.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins13_004',
      question: 'What type of sensor if used to measure pressure output of a fuel booster pump?',
      options: ['Bourden tube.', 'Capacitor.', 'Aneroid capsule.', 'Bellows.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins13_005',
      question: 'A capacitive fuel gauging system can calculate the mass of fuel by using the fact that?',
      options: ['Fuel dielectric constant is proportional to p and twice that of air.', 'Fuel dielectric constant is equal to 1/p and proportional to that of air.', 'Fuel dielectric constant is equal to p and proportional to that of air.', 'Fuel dielectric constant is proportional to 1/p and equal to that of air.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins13_006',
      question: 'The fundamental principal of a capacitive fuel gauging system is?',
      options: ['Changes in capacitive reactance.', 'Changes in reactive capacitance.', 'Constant reactive capacitance.', 'Variations in dielectric constant of fuel.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins13_007',
      question: 'A volumetric fuel flow meter differs from mass flow meter in that only the latter compensates for?',
      options: ['Changes in density.', 'Changes in fuel dielectric constant.', 'Changes in mass of fuel.', 'Changes in fuel pressure.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins13_008',
      question: 'An aircraft with a compensated capacitive fuel gauging system is refueled to a fuel load of 45000 Kg. if the\ntemperature of the fuel then falls from 15° C to - 40° C in flight, how will the indications vary? (ignore fuel\nusage in flight).',
      options: ['No changes.', 'Increase.', 'Decrease.', 'Depends upon density and type of fuel.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins13_009',
      question: 'A fuel flow meter measures?',
      options: ['The mass flow of fuel.', 'The volumetric flow of fuel.', 'The density of fuel.', 'The mass flow or volumetric flow of fuel depending on type of system.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins13_010',
      question: 'The disadvantages of a float type fuel gauging system include?\n\n 1. Errors due to acceleration.\n 2. Errors due to changes in aircraft attitude.\n 3. It requires an AC power supply.\n 4. It requires a DC power supply.\n 5. Errors due to thermal expansion and contraction of fuel.\n 6. Errors due to refueling with different fuel grades.',
      options: ['1, 2, 3, 5, 6.', '1, 2, 5, 6.', '1, 2, 3, 4.', '1, 2, 4, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins13_011',
      question: 'A mass flow meter is better than a volumetric flow meter because it is able to ?',
      options: ['Compensate for density changes.', 'Compensate for pressure changes.', 'Compensate for changes in fuel calorific value.', 'Compensate for changes in fuel viscosity.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins13_012',
      question: 'Fuel mass flow rate is more important than volumetric flow rate because?',
      options: ['Fuel costs are calculated by mass.', 'Calorific value is proportional to mass.', 'Calorific value is proportional to volume.', 'Fuel air ratio is based on mass.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins13_013',
      question: 'Modern turbojet or turboprop aircraft are likely to employ?',
      options: ['Volumetric fuel flow gauges.', 'Mass fuel flow meters.', 'Spectrometric fuel flow meters.', 'Capacitive fuel flow meters.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins13_014',
      question: 'Modern turbojet and turboprop aircraft are likely to employ?',
      options: ['Capacitive mass fuel flow meters.', 'Venturi type fuel flow meters.', 'Variable orifice fuel flow meters.', 'Turbine impeller type fuel flow meters.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins13_015',
      question: 'If the tanks of an aircraft employing a capacitive fuel gauging system contain only water, the gauge will?',
      options: ['A mass equal to the same of water.', 'Read the exact mass of water contained in the tank.', 'A mass equal to zero.', 'A mass of water different from zero but inaccurate.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins13_016',
      question: 'The advantages of a float type fuel gauging system include?\n\n 1. Automatically compensates for density changes.\n 2. It is simple and cheap.\n 3. Compensates for thermal expansion and contraction.\n 4. Compensates for attitude changes.',
      options: ['1, 2, 3, 4.', '2.', '2, 3, 4.', '2, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins13_017',
      question: 'A float type fuel gauging system?',
      options: ['Is sensitive to variation in system voltage if it employs a galvanometer.', 'Is sensitive to variations in system voltage if it employs a ratiometer.', 'Depends upon changes in system voltage.', 'Is independent of variation in system voltage.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins13_018',
      question: 'A paddle – wheel placed in the fuel circuit of a gas turbine engine initially measures?',
      options: ['Mass flow by tally of the impulses.', 'Volumetric flow by tally of the impulses.', 'Volumetric flow by measure of a voltage proportional to the rotational speed.', 'Mass flow by measure of a voltage proportional to the rotational speed. GPWS'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins14: [
    {
      id: 'ins14_001',
      question: 'If the computed aircraft position becomes less accurate, the Enhanced GPWS (EGPWS) functions affected are :\n\n 1. The “FIVE HUNDRED” voice call out.\n 2. The excessive rate of descent.\n 3. The terrain display on the navigation display.\n 4. The negative climb rate or altitude loss after take-off.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 2.', '4.', '3.', '3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins14_002',
      question: 'The aural alert associated with the mode 5 (excessive deviation below glideslope) of the GPWS is:',
      options: ['CAUTION GLIDESLOPE', 'MONITOR GLIDESLOPE', 'TOO LOW GLIDESLOPE', 'GLIDESLOPE'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins14_003',
      question: 'The aural alert associated with the mode 1 (excessive descent rate) of the GPWS is :',
      options: ['TERRAIN', 'TOO LOW TERRAIN', 'SINK RATE', 'GLIDESLOPE'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins14_004',
      question: 'The aural alert associated with the mode 3 (altitude loss after take-off or go-around) of the GPWS is :',
      options: ['TOO LOW TERRAIN', 'TERRAIN', 'DON’T SINK', 'SINK RATE'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins14_005',
      question: 'The aural alert associated with the mode 2 (excessive terrain closure rate) of the GPWS is :',
      options: ['TERRAIN', 'CLIMB', 'SINK RATE', 'DON’T SINK'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins14_006',
      question: 'The aural alert associated with the mode 4 (unsafe terrain clearance while not in the landing configuration) of\nthe GPWS is :',
      options: ['TOO LOW “CHECK FLAPS” “CHECK GEAR”', 'TOO LOW FLAPS “TOO LOW GEAR” “GLIDE SLOPE”', 'TOO LOW, TERRAIN only.', 'TOO LOW GAR “TOO LOW FLAPS” “TOO LOW TERRAIN”'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins14_007',
      question: 'In the case of altitude loss during the initial climb after take-off, GPWS generates an aural alert:',
      options: ['TOO LOW GEAR', 'TERRAIN AHEAD', 'TOO LOW FLAPS', 'DON’T SINK'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins14_008',
      question: 'The aural alert(s) associated with the Mode 1 (excessive descent rate) of GPWS is(are):\n\n 1. “TERRAIN”.\n 2. “DON’T SINK”.\n 3. “SINK RATE”.\n 4. “PULL UP”.\n\nThe combination that regroups all of the correct statements is :',
      options: ['3, 4.', '2, 4.', '1', '2'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins14_009',
      question: 'The aural alert(s) associated with the Mode 3 (altitude loss after take-off or go- around) of the GPWS is(are):\n\n 1. “DON’T SINK”.\n 2. “SINK RATE”.\n 3. “TERRAIN”.\n 4. “PULL UP”.\n\nThe combination that regroups all of the correct statements is:',
      options: ['1', '3, 4.', '2, 4.', '2'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins14_010',
      question: 'The GPWS can warn the crew in case of :\n\n 1. Excessive sink rate.\n 2. Unsafe terrain clearance when not in landing configuration.\n 3. Descent path angle greater than 5 degrees\n 4. Windshear.\n\nThe combination that regroups all of the correct statements is :',
      options: ['2', '3', '2, 4.', '1, 2, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins14_011',
      question: 'The aural alert(s) associated with the Mode 5 (excessive deviation below glideslope) of the GPWS is (are):\n\n 1. “TERRAIN”.\n 2. “TOO LOW GLIDESLOPE”.\n 3. “GLIDE SLOPE”.\n 4. “PULL UP”.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1.', '2, 4.', '2.', '3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins14_012',
      question: 'The EGPWS:',
      options: ['Is an enhanced GPWS, which warn the crew if the aircraft is not in the appropriate configuration for take – off.', 'Is an enhanced GPWS, which is able to provide resolution advisories in the lateral plane.', 'Is an enhanced GPWS, which has its own world terrain database.', 'Has nothing to do with GPWS.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins14_013',
      question: 'The aural alert(s) associated with the Mode 4 (unsafe terrain clearance while not in this landing configuration)\nof the GPWS is(are):\n\n 1. “TOO LOW GEAR”.\n 2. “TOO LOW TERRAIN”.\n 3. “TOO LOW FLAPS”.\n 4. “PULL UP”.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 2, 3.', '1, 2.', '2, 4.', '2.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins14_014',
      question: 'When enhanced GPWS (EGPWS) terrain is displayed, if the computed aircraft position becomes less accurate :',
      options: ['The EGPWS will perform a connection of positions thus the terrain display accuracy will not be degraded.', 'The EGPWS has its own position sensors thus terrain display accuracy will not be degraded.', 'The EGPWS will fail the terrain display function test and the terrain will be removed from the navigation display.', 'The terrain display will diverge from the real terrain environment around the aircraft.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins14_015',
      question: 'The enhanced GPWS (EGPWS) terrain display uses the following colours :',
      options: ['Blue, red, magenta.', 'Magenta, red, flashing red.', 'Green, amber, red, magenta.', 'White, amber, red.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins14_016',
      question: 'The input data to the GPWS originate from the :L\n\n 1. Transponder.\n 2. Angle of attack sensor.\n 3. Auto throttle sensor.\n 4. ADC.\n\nThe combination that regroups all of the correct statements is :',
      options: ['4.', '1, 4.', '3, 4.', '2.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins14_017',
      question: 'The GPWS receives data from the following systems :\n\n 1. Landing gear and flap system.\n 2. Engine control computer (FADEC or ECU).\n 3. Radio – altimeter.\n 4. TCAS.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 3.', '1, 2, 3, 4.', '1, 2.', '2, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins14_018',
      question: 'The GPWS warns the crew in case of :\n\n 1. Excessive descent rate.\n 2. Excessive terrain closure rate.\n 3. Potential midair collision threat.\n 4. Serious midair collision threat.\n 5. Unsafe terrain clearance with landing gear not down.\n\nThe combination regrouping all of the correct statements is :',
      options: ['1, 2, 4, 5.', '4.', '1, 2, 5.', '1, 2, 3, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins14_018_2',
      question: 'The EGPWS may propose the following functions :\n\n 1. Abnormal take – off configuration.\n 2. Terrain clearance floor (TCF).\n 3. Predictive Windshear (PWS).\n 4. Terrain look ahead alerting.\n\n 5. Terrain alerting display (TAD).\n\nThe combination regrouping all of the correct statements is :',
      options: ['1, 3, 4.', '1, 2, 3, 5.', '2, 4, 5.', '2, 3, 4, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins14_020',
      question: 'The EGPWS may propose the terrain Look-Ahead Alerting function. This function uses :',
      options: ['The weather radar to detect any high ground in conflict with the flight path of the aircraft.', 'The same caution and warning envelopes than the mode 2 GPWS (excessive terrain closure rate).', 'An electronic map of the world giving ground elevation.', 'A specific radar to detect any high ground in conflict with the flight path of the aircraft.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins14_021',
      question: 'The GPWS can warn crew in case of :\n\n 1. Excessive deviation below selected altitude.\n 2. Windshear.\n 3. Excessive terrain closing rate.\n\nThe combination regrouping all of the correct statements is :',
      options: ['2, 3.', '3.', '1.', '1, 2, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins14_022',
      question: 'If the computed aircraft position becomes less accurate, the Enhanced GPWS (EGPWS) functions affected are :\n\n 1. The excessive rate of descent.\n 2. The terrain display on the navigation display.\n 3. The flight into terrain when not in landing configuration.\n 4. The excessive downward deviation from an ILS.\n\nThe combination that regroups all of the correct statements is :',
      options: ['3.', '2.', '2, 3, 4.', '1, 2, 3. GYRO'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins15: [
    {
      id: 'ins15_001',
      question: 'The spin axis of a turn indicator gyroscope is parallel to :',
      options: ['Yaw axis.', 'Longitudinal axis.', 'Pitch axis.', 'Roll axis.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_002',
      question: 'Concerning the directional gyro, the apparent drift rate due to the Earth’s rotation is a function of :',
      options: ['Longitude.', 'Latitude and longitude.', 'Magnetic longitude.', 'Latitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_003',
      question: 'The building principle of a gyroscope, the best efficiency is obtained through the concentration of the mass?',
      options: ['Close to the axis and with a low rotation speed.', 'On the periphery and with a high rotation speed.', 'Close to the axis and with a high rotation speed.', 'On the periphery and with a low rotation speed.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_004',
      question: 'A Standby horizon or emergency attitude indicator?',
      options: ['Only works of there is a complete electrical failure.', 'Contains its own separate gyro.', 'Is automatically connected to the primary vertical gyro is the alternator fails.', 'Is fully independent of external energy resources in an emergency situation.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_005',
      question: 'The basis properties of a gyroscope are ?\n\n 1. The gyro’s weight.\n 2. The rigidity in space.\n 3. The inertia.\n 4. The high RPM.\n 5. The precession.\n\nThe combination of correct statements is ?',
      options: ['3, 4.', '2, 5.', '2, 3, 5.', '1, 3, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_006',
      question: 'The indications of the directional gyro when used as an on-board instrument are valid only for a short period of\ntime. The causes of this inaccuracy are ?',
      options: ['1, 3, 4.', '1, 2, 3, 4, 5, 6.', '2, 5, 6.', '1, 3, 4, 6.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_007',
      question: 'The characteristics of the directional gyro (DG) used in a gyro stabilized compass system are ?',
      options: ['One degree of freedom, whose vertical axis, aligned with the real vertical to the location is maintained in this direction by an automatic erecting system.', 'Two degrees of freedom, whose horizontal axis corresponding to the reference direction is maintained in the horizontal plane by an automatic erecting system.', 'Two degrees of freedom, whose axis aligned with the vertical to the location is maintained in this direction by an erecting system.', 'One degree of freedom, whose horizontal axis is maintained in the horizontal plane by an automatic erecting system.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_008',
      question: 'A gravity type erector is used in a vertical gyro device to correct errors on?',
      options: ['An artificial horizon.', 'A directional gyro unit.', 'A turn indicator.', 'A gyro-magnetic indicator.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_009',
      question: 'When an aircraft has turned 360 degrees with a constant attitude and bank, the pilot observes the following on a\nclassic artificial horizon?',
      options: ['Too much nose-up and bank correct.', 'Too much nose-up and bank too high.', 'Attitude and bank correct.', 'Too much nose-up and bank too low.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_010',
      question: 'When an aircraft has turned 270 degrees with a constant attitude and bank, the pilot observes the following on a\nclassic artificial horizon?',
      options: ['Too much nose-up and bank too high.', 'Too much nose-up and bank too low.', 'Attitude and bank correct.', 'Too much nose – up and bank correct.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_011',
      question: 'Note : in this question, the degrees of freedom of a gyro are determined by the number of gimbal rings it\ncomprises. Among the flight control instruments, the artificial horizon plays an essential part. It uses a\ngyroscope with ?',
      options: ['Two degrees of freedom, whose axis is oriented and continuously maintained to local vertical by an automatic erecting system.', 'Two degrees of freedom, whose horizontal axis corresponding to a reference direction is maintained in a horizontal plane by an automatic erecting system.', 'One degree of freedom, whose horizontal axis is maintained in a horizontal plane by an automatic erecting system.', 'One degree of freedom, whose vertical axis oriented in the direction of the real vertical to the location is maintained in this direction by an automatic erecting system.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_012',
      question: 'A slaved directional gyro derives it’s directional signal from?',
      options: ['A direct reading magnetic compass.', 'The flight director.', 'The flux valve.', 'The air-data-computer.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_013',
      question: 'A turn indicator is built around a gyroscope with?',
      options: ['1 degree of freedom.', '3 degrees of freedom.', '2 degrees of freedom.', '0 degree of freedom.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_014',
      question: 'The diagram below shows three gyro assemblies : A, B and C. among these gyros,\n\nOne is a roll gyro (noted 1).\nOne is a pitch gyro (noted 2).\n\nOne is a yaw gyro (noted 3).\n\nThe correct matching of gyros and assemblies is?',
      options: ['1C, 2A, 3B.', '1B, 2A, 3C.', '1A, 2B, 3C.', '1B, 2C, 3A.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_015',
      question: 'The indications on a directional gyroscope or gyrocompass are subject to errors, due to :\n\n 1. Rotation of Earth.\n 2. Aeroplane motion on Earth.\n 3. Lateral and transversal aeroplane bank angles.\n 4. North change.\n 5. Mechanical defects.\n\nChose the combination with true statements only?',
      options: ['2, 3, 5.', '1, 2, 3, 5.', '3, 4, 5.', '1, 2, 4, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_016',
      question: 'At a low bank angle, he measurement of rate-of-turn actually consists in measuring the?',
      options: ['Angular velocity of the aircraft.', 'Yaw rate of the aircraft.', 'Pitch rate of the aircraft.', 'Roll rate of the aircraft.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_017',
      question: 'An airborne instrument, equipped with a gyro with 2 degrees of freedom and a horizontal spin axis is?',
      options: ['An artificial horizon.', 'A turn indicator.', 'A fluxgate compass.', 'A directional gyro.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_018',
      question: 'When, in flight, the needle of a needle and ball indicator is on the left and the ball on the right, the aircraft is ?',
      options: ['Turning left with two much bank.', 'Turning right with not enough bank.', 'Turning right with too much bank.', 'Turning left with not enough bank.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_019',
      question: 'When, in flight, the needle of a needle and ball indicator is on the right and the ball on the left, the aircraft is ?',
      options: ['Turning left with too much bank.', 'Turning right with not enough bank.', 'Turning right with too much bank.', 'Turning left with not enough bank.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_020',
      question: 'When, in flight, the needle and ball of a needle and ball indicator are on the right, the aircraft i?',
      options: ['Turning left with too much bank.', 'Turning left with not enough bank.', 'Turning right with too much bank.', 'Turning right with not enough bank.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_021',
      question: 'When, in flight, the needle and ball of a needle-and-ball indicator are on the left, the aircraft is ?',
      options: ['Turning right with too much bank.', 'Turning right with not enough bank.', 'Turning left with too much bank.', 'Turning left with not enough bank.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_022',
      question: 'On the ground, during a left turn, the turn indicator indicates?',
      options: ['Needle to the left, ball to the left.', 'Needle in the middle, ball to the right.', 'Needle in the middle, ball to the left.', 'Needle to the left, ball to the right.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_023',
      question: 'The rate-of-turn is the?',
      options: ['Pitch rate in a turn.', 'Change-of-heading rate of the aircraft.', 'Yaw rate in a turn aircraft.', 'Speed in a turn.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_024',
      question: 'In a Turn-indicator, the measurement of rate of turn consists for?',
      options: ['High bank angles, in measuring the yaw rate.', 'High bank angles, in measuring the roll rate.', 'Low bank angles, in measuring the yaw rate.', 'Low bank angles, in measuring the roll rate.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_025',
      question: 'In a turn at constant rate, the turn indicator reading is ?',
      options: ['Proportional to the aircraft true airspeed.', 'Independent to the aircraft true airspeed.', 'Proportional to the aircraft weight.', 'Inversely proportional to the aircraft true airspeed.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_026',
      question: 'An airborne instrument, equipped with a gyro with 2 degrees of freedom and a horizontal spin axis is?',
      options: ['A directional gyro.', 'An artificial horizon.', 'A turn indicator.', 'A flux gate compass.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_027',
      question: 'An airborne instrument, equipped with a gyro with 1 degree of freedom and a horizontal spin axis is a?',
      options: ['Fluxgate compass.', 'Directional gyro.', 'Turn indicator.', 'Gyro-magnetic compass.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_028',
      question: 'The vertical reference unit of a three-axis data generator is equipped with a gyro with?',
      options: ['1 degree of freedom and horizontal spin axis.', '1 degree of freedom and vertical spin axis.', '2 degrees of freedom and vertical spin axis.', '2 degrees of freedom and horizontal spin axis.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_029',
      question: 'When an aircraft has turned 90 degrees with a constant attitude and bank, the pilot observes the following on a\nclassic artificial horizon?',
      options: ['Too much nose-up and bank correct.', 'Too much nose-up and bank too high.', 'Too much nose-up and bank too low.', 'Attitude and bank correct.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_030',
      question: 'On the ground, during a right turn, the turn indicator indicates?',
      options: ['Needle in the middle, ball to left.', 'Needle to the right, ball to left.', 'Needle to the right, ball to right.', 'Needle in the middle, ball to right.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_031',
      question: 'The heading reference unit of a three-axis data generator is equipped with a gyro with?',
      options: ['2 degrees of freedom and horizontal spin axis.', '2 degrees of freedom and vertical spin axis.', '1 degree of freedom and horizontal spin axis.', '1 degree of freedom and vertical spin axis.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_032',
      question: 'Following 180° stabilized turn with a constant attitude and bank, the artificial horizon indicates?',
      options: ['Too high pitch-up and too low banking.', 'Too high pitch-up and correct banking.', 'Attitude and banking correct.', 'Too high pitch up and too high banking.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_033',
      question: 'The gyro-magnetic compass torque motor?',
      options: ['Causes the directional gyro unit to precess.', 'Causes the heading indicator to precess.', 'Feeds the error defector system.', 'Is fed by the flux valve.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_034',
      question: 'The heading information originating from the gyro-magnetic compass flux valve is sent to the ?',
      options: ['Error detector.', 'Erector system.', 'Heading indicator.', 'Amplifier.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_035',
      question: 'The input signal of the amplifier of the gyro-magnetic compass resetting device originates from the?',
      options: ['Directional gyro erection device.', 'Error defector.', 'Flux valve.', 'Directional gyro unit.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_036',
      question: 'A rate integrating gyro is a detecting element used in?\n\n 1. An inertial attitude unit.\n 2. An automatic pilot.\n 3. A stabilizing servo system.\n 4. An inertial navigation system.\n 5. A rate-of-turn indicator.\n\nThe combination of correct statements is?',
      options: ['1, 4.', '1, 2, 3, 4, 5.', '2, 3, 4.', '2, 3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_037',
      question: 'Under normal operating conditions, when an aircraft is in a banked turn, the rate-of-turn indicator is a valuable\ngyroscopic flight control instrument ; when it is associated with an attitude indicator it indicates?\n\n 1. The angular velocity of the aircraft about the yaw axis.\n 2. The bank of the aircraft.\n 3. The direction of the aircraft turn.\n 4. The angular velocity of the aircraft about the real vertical.\n\nThe combination of correct statements is ?',
      options: ['3, 4.', '2, 4.', '1, 3.', '1, 2.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_038',
      question: 'The gimbal error of the directional gyro is due to the effect of?',
      options: ['A bank or pitch attitude of the aircraft.', 'An apparent weight and an apparent vertical.', 'Too slow precession on the horizontal gimbal ring.', 'The aircraft’s track over the earth.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_039',
      question: 'The pendulum type detector system of the directional gyro feeds?',
      options: ['A torque motor on the sensitive axis.', '2 torque motors arranged horizontally.', 'A levelling erection torque motor.', 'A nozzle integral with the outer gimbal ring.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_040',
      question: 'The directional gyro axis spins about the local vertical by 15°/hour?',
      options: ['In the latitude 30°.', 'In the latitude 45°.', 'On the equator.', 'On the North pole.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_041',
      question: 'Compared with a conventional gyro, a laser gyro?',
      options: ['Consumes a lot of power.', 'Has a longer life cycle.', 'Is influenced by temperature.', 'Has a fairly long starting cycle.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_042',
      question: 'The diagram representing a left turn with insufficient rudder is?',
      options: ['2.', '3.', '4.', '1.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_043',
      question: 'A turn indicator is an instrument which indicates rate of turn. Rate of turn depends upon:\n\n 1. Bank angle.\n 2. Aeroplane speed.\n 3. Aeroplane weight.\n\nThe combination regrouping the correct statements is?',
      options: ['1, 2, and 3.', '1 and 2.', '1 and 3.', '2 and 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_044',
      question: 'During an acceleration phase at constant attitude, the resetting principle of the artificial horizon results in the\nhorizon bar indicating a?',
      options: ['Nose-down attitude.', 'Constant attitude.', 'Nose -down followed by a nose-up attitude.', 'Nose-up attitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_045',
      question: 'Heading information given by a gyro platform, is given by a gyro at?',
      options: ['2 degrees – of – freedom in the vertical axis.', '1 degree – of – freedom in the horizontal axis.', '1 degree – of – freedom in the vertical axis.', '2 degrees – of – freedom in the horizontal axis.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_046',
      question: 'Among the systematic errors of he “directional gyro”, the error due to the earth rotation make the north\nreference turn in the horizontal plane. At a mean latitude of 45° N, this reference turns by?',
      options: ['15°/hour to the right.', '7.5°/hour to the right.', '7.5°/hour to the left.', '10.5°/hour to the right.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_047',
      question: 'The diagram which shows a 45° left bank and 5° nose down attitude is?',
      options: ['2.', '1.', '3.', '4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_048',
      question: 'The heading read on the dial of a directional gyro is subject to errors, one of which is due to the movement of\nthe aircraft. This error?',
      options: ['Is at its greatest value when the aircraft follows a meridional track.', 'Shows itself by an apparent rotation of the horizontal axis of the gyroscope which seems to turn at 15° per hour to the right in the northern hemisphere.', 'Is dependent on the ground speed of the aircraft, its true track and the average latitude of the flight.', 'Is, in spite of this, insignificant and may be neglected.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_049',
      question: 'A gravity erector system is used to correct the errors on?',
      options: ['Artificial horizon.', 'A directional gyro.', 'A turn indicator.', 'A gyro-magnetic compass.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins15_050',
      question: 'The maximum directional gyro error due to the earth rotation is?',
      options: ['180°/hour.', '5°/hour.', '15°/hour.', '90°/hour. INS/IRS'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins16: [
    {
      id: 'ins16_001',
      question: 'An inertial reference and navigation system is a “strapdown” system when:',
      options: ['Gyros and accelerometers are mounted on a stabilized platform.', 'The gyroscopes and the accelerometers are part of the unit’s fixture to the aircraft structure.', 'Only the gyros and not the accelerometers are part of the unit’s fixture to the aircraft structure.', 'The gyros and accelerometers need satellite information input to obtain a vertical reference.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_002',
      question: 'The principle of the Schuler pendulum is used in the design of a :',
      options: ['Directional gyro control system.', 'Stabilized platform inertial system.', 'Strapdown inertial system.', 'Artificial horizon control system.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_003',
      question: 'The operating The principle of an inertial system consists of:',
      options: ['Measuring the acceleration, speed and position of the aircraft.', 'Measuring earth rotation and performing integrations to elaborate the ground speed and position.', 'Measuring the accelerations of the aircraft and performing integrations to elaborate the ground speed and position.', 'Measuring the position of the aircraft and performing integrations to elaborate the ground speed and acceleration.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_004',
      question: 'In an inertial navigation system, to know the distance travelled:',
      options: ['Integrating once the speed in time is sufficient.', 'It is necessary to integrate once the speed in time, and to know the initial speed only.', 'It is necessary to integrate once the speed in time, and to know the initial position only.', 'It is necessary to integrate once the speed in time, and to know the initial speed and initial position.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_005',
      question: 'To know the instantaneous speed from the accelerations:',
      options: ['It is necessary to integrate the acceleration once in time, and to know the initial speed only.', 'It is necessary to integrate the acceleration once in time is sufficient.', 'It is necessary to integrate the acceleration once in time, and to know the initial position only.', 'It is necessary to integrate the acceleration once in time, and to know the initial speed and the initial position.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_006',
      question: 'To know the instantaneous position from the accelerations :',
      options: ['It is necessary to integrate the acceleration twice in time, and to know the initial speed and the initial position.', 'It is necessary to integrate the acceleration twice in time is sufficient.', 'It is necessary to integrate the acceleration twice in time, and to know the initial position only.', 'It is necessary to integrate the acceleration twice in time, and to know the initial speed only.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_007',
      question: 'The position error of a stand-alone inertial system, is approximately:',
      options: ['0.01 to 0.2 nm per hour.', '0.5 to 2 nm per hour.', '8 to 10 nm per hour.', '6 to 8 nm per hour.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_008',
      question: 'The output data of an IRS include :\n\n 1. Attitude.\n 2. Altitude.\n 3. Present position (lat, long).\n 4. Static air temperature.\n\nThe combination regrouping all of the correct statements is :',
      options: ['1, 2, 3, 4.', '1, 3.', '1, 3, 4.', '1, 2, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_009',
      question: 'if the acceleration of an aircraft is zero, its velocity:',
      options: ['Will increase.', 'Will decrease.', 'Is always zero.', 'Is constant.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_010',
      question: 'The alignment of an inertial system can be successfully performed :',
      options: ['When the aircraft is stationary.', 'In all phases of flight outside areas of turbulence.', 'In all phases of flight.', 'When the aircraft is taxiing.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_011',
      question: 'The time for a normal alignment (not a quick alignment) of an inertial system is:',
      options: ['1 to 2 minutes.', '3 to 10 minutes.', '15 to 20 minutes.', 'Less than 1 minute.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_012',
      question: 'The output data of an IRS include :\n\n 1. Present position.\n 2. Total pressure.\n 3. Static temperature.\n 4. True heading.\n\nThe combination regrouping all of the correct statements is :',
      options: ['1, 2, 4.', '2, 3.', '1, 4.', '1, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_013',
      question: 'In an inertial navigation system, the integration process makes a :',
      options: ['Time multiplication.', 'Time division.', 'Distance multiplication.', 'Distance division.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_014',
      question: 'The output data of an IRS include :\n\n 1. Satellites status.\n 2. Altitude.\n 3. Drift angle.\n 4. Present position (lat/long).\n\nThe combination that regroups all of the correct statements is :',
      options: ['2, 4.', '3, ,4.', '1, 3, 4.', '4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_015',
      question: 'Considering a stabilized platform system :\n\n 1. The rate gyros and the accelerometers are mounted on the same platform.\n 2. The rate gyros and accelerometers are mounted on separate platforms.\n 3. The principle of operation requires at least 2 rate gyros.\n 4. The principle of operation requires at least 2 accelerometers.\n\nThe combination that regroups all of the correct statements is :',
      options: ['2, 3.', '1, 3.', '1, 4.', '2, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_016',
      question: 'In inertial navigation systems, the integration process :\n\n 1. Amounts to making a time decision.\n 2. Amounts o making a time multiplication.\n 3. Enable to get accelerations from position.\n 4. Enable to get position from accelerations.\n\nThe combination that regroups all of the correct statements is :',
      options: ['2, 4.', '2, 3.', '1, 4.', '1, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_017',
      question: 'The output data from an IRS include :\n\n 1. Angle of attack.\n 2. Altitude.\n 3. Ground speed.\n\nThe combination that regroups all of the correct statements is :',
      options: ['3', '2', '1, 3.', '1, 2.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_018',
      question: 'The output data from an IRS include :\n\n 1. Number of satellites tracked.\n 2. Mach number.\n 3. Ground speed.\n 4. True track.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 4.', '3, 4.', '1, 2, 3, 4.', '2, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_019',
      question: 'To obtain instantaneous speed from the accelerometers, it is necessary to :\n\n 1. Integrate once the acceleration in time.\n 2. Know the initial position.\n 3. Know the initial speed.\n\nThe combination that regroups all of the corrects statements is :',
      options: ['1, 2.', '1, 3', '1, 2, 3.', '1.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_020',
      question: 'In an inertial navigation system, the principle used to obtain position is :\n\n 1. Single integration of acceleration according to time.\n 2. Double integration of acceleration according to time.\n 3. Single integration of speed according to time.\n\n 4. Doble integration of speed according to time.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1', '2 or 3.', '3', '1 or 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_021',
      question: 'To obtain instantaneous position from the accelerometers, it is necessary to :\n\n 1. Integrate twice the acceleration in time.\n 2. Know the initial position.\n 3. Know the initial speed.\n\nThe combination that regroups all of the corrects statements is :',
      options: ['1, 2, 3.', '1', '1, 2.', '1, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_022',
      question: 'Considering a strapdown inertial system, the operating principle requires at least :',
      options: ['3 laser gyros and 2 accelerometers.', '2 laser gyros and 3 accelerometers.', '2 laser gyros and 2 accelerometers.', '3 laser gyros and 3 accelerometers.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_023',
      question: 'Compared with a stabilized platform inertial system, a strapdown inertial system ;\n\n 1. Has a longer alignment phase in time.\n 2. Has a shorter alignment phase in time.\n 3. Is more reliable in time.\n 4. Is less reliable in time.\n\nThe combination that regroups all of the correct statements is :',
      options: ['2, 3.', '1, 3.', '1, 4.', '2, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_024',
      question: 'A strapdown inertial system consists of :',
      options: ['Gyroscopes attached to the aircraft chassis and accelerometers, which are not.', 'Accelerometers attached to the aircraft chassis and gyroscopes, which are not.', 'A platform attached to the aircraft chassis and which includes gyroscopes and accelerometers.', 'A platform free of the aircraft chassis and which includes gyroscopes and accelerometers.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_025',
      question: 'In an inertial navigation system, integrating once the speed gives :',
      options: ['A distance travelled', 'A position.', 'An instantaneous acceleration.', 'An average acceleration.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_027',
      question: 'The alignment phase of a gyro-stabilised platform consists of :',
      options: ['Levelling the platform and determining its orientation.', 'Aligning the platform axis with the aircraft axis (pitch, yaw and roll).', 'Aligning the platform axis with the aircraft pitch axis only.', 'Aligning the platform axis with the aircraft roll axis only.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_028',
      question: 'If the navigation function of an INS is inoperative and the control switch is set to ATT, the output data of the\nINS are ;',
      options: ['Attitude and ground speed.', 'Attitude and heading.', 'Ground speed and heading.', 'Attitude, TAS and heading.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_029',
      question: 'A ring laser gyro is :',
      options: ['A device that measures earth rate precession.', 'Used for stabilizing the inns platform.', 'A device that measures angular movement.', 'An optical accelerometer.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_030',
      question: 'Considering a strapdown inertial system, the IRU (Inertial Reference Unit) measures :',
      options: ['Angular rates only.', 'Linear accelerations only.', 'Accelerations and angular rates.', 'Angular accelerations only.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_031',
      question: 'The alignment time of a strapdown inertial system takes longer time when the aircraft is :',
      options: ['At a high latitude.', 'Close to the equator.', 'At a high longitude.', 'At a location where magnetic variation is greater than 15 degrees.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_032',
      question: 'An inertial Navigation System:',
      options: ['Can only operate when communicating with ground installations.', 'Can only operate when interfacing with the GPS equipment.', 'Can be operated as a stand-alone equipment without any interface with other navigation equipment.', 'Can only operate when interfacing with other navigation equipment.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_033',
      question: 'On the INS control panel, the rotary knob can be selected to OFF, NAV or ATT positions.\nThe correct statements is',
      options: ['NAV is the normal setting. The ATT position is a back-up position in case of failure of the navigation function.', 'NAV is the normal setting. The OFF position is a back-up position in case of failure of the navigation function.', 'ATT is the normal system setting.', 'ATT is the normal system setting. The NAV position inhibits the attitude data.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_034',
      question: 'The position data (la and long) computed by an IRS can be used by the :',
      options: ['TCAS.', 'ADC.', 'ILS receiver.', 'FMS.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_035',
      question: 'In a stabilized platform inertial system, the accelerations are measured in a trihedron which is : (NB. “aircraft\ntrihedron” = pitch, roll and yaw axis.)',
      options: ['Free from the aircraft’s trihedron.', 'Fixed in absolute space.', 'Merged with the aircraft’s trihedron.', 'Merged with only two axes of the aircraft trihedron, the roll and pitch axes.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_036',
      question: 'In an inertial navigation system, the principle used to obtain the change in speed is :',
      options: ['Double integration of acceleration according to time.', 'Single integration of position according to time.', 'Single integration of acceleration according to time.', 'Double integration of position according to time.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_037',
      question: 'The characteristics of the earth which are used during alignment of an INS platform are :',
      options: ['Earth rotation and gravity.', 'Longitude and gravity.', 'Earth magnetic field and earth rotation.', 'Earth rotation and longitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_038',
      question: 'In a strapdown inertial system, the accelerations are measured in a trihedron which is fixed regarding:',
      options: ['Absolute space.', 'Earth’s trihedron (longitude and latitude).', 'Earth’s trihedron (X, Y, Z).', 'Aircraft’s trihedron (pitch, roll and yaw axis).'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_039',
      question: 'The output data of an IRS include :\n\n 1. Present position (lat and long).\n 2. TAS.\n 3. Attitude.\n 4. Ground speed.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 2, 4.', '1, 3, 4.', '2, 3, 4.', '1, 2, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_040',
      question: 'The accuracy of the altitude computed by a stand-alone inertial system:',
      options: ['Decreases exponentially with flight time.', 'Decreases proportionally with flight time.', 'Is bounded.', 'Is poor at the beginning of the flight.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_041',
      question: 'Considering a stabilized platform inertial system, this platform :\n\n 1. Can be servo controlled in azimuth.\n 2. Is kept level during the alignment phase only.\n 3. Is always kept level.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 2.', '2.', '3.', '1, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_042',
      question: 'Comparing the radio navigation system and the inertial navigation system :\n\n 1. The radio position is more accurate in DME range.\n 2. The radio position may be obtained whatever the position on the earth.\n 3. The inertial position may be obtained whatever the position on the earth.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 2.', '1, 3.', '2', '3'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_043',
      question: 'An inertial navigation system, to know the distance travelled, it is necessary to:\n\n 1. Integrate once the speed in time.\n 2. To know the initial position.\n 3. To know the initial speed.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1', '1, 2, 3.', '1, 3.', '1, 2.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_044',
      question: 'The position error of a stand-alone inertial system:',
      options: ['Is sinusoidal.', 'Remains constant.', 'Increases up to 2 nm due to the drift error of the gyroscopes then stabilizes.', 'Increases along the time.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_045',
      question: 'If the navigation function of an INS becomes inoperative and the control rotary switch is set to ATT, the output\ndata of the INS are :',
      options: ['Position only.', 'Position and attitude.', 'Attitude and groundspeed.', 'Attitude and heading.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_046',
      question: 'The alignment of a strapdown inertial system consists of :',
      options: ['Measuring the earth rotation and local gravitation to position the reference trihedron.', 'Positioning the gyroscopes and accelerometers relative to the fuselage axis.', 'Positioning the platform relative to the local vertical and true north.', 'Positioning the accelerometers.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_047',
      question: 'The attitude data computed by an IRS can be used by the :',
      options: ['Autopilot system.', 'TCAS.', 'GPWS.', 'Stall warning system.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_048',
      question: 'If the position data (lat and long) is no longer computed by an IRS, the affected systems are :',
      options: ['FMS and TCAS.', 'TCAS.', 'ADC and TCAS.', 'FMS.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_049',
      question: 'The output data from an IRS include :\n\n 1. Present position (long and lat).\n 2. Altitude.\n 3. Ground speed.\n 4. True heading.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 3, 4.', '1, 4.', '1, 2, 3, 4.', '1, 2, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_050',
      question: 'The position error of a stand-alone inertial system is ;',
      options: ['Small and constant along the flight.', 'Small a few minutes after initialization and increases along the flight.', 'Large a few minutes after initialization and reduces along the flight.', 'Constant along the flight with accuracy depending on the accuracy of the accelerometers.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_051',
      question: 'The sideslip indication displayed on the PFD (Primary Flight Display) is generated by the :',
      options: ['The yaw damper.', 'The automatic flight control system (AFCS).', 'The inertial system.', 'The stall protection system.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_052',
      question: 'The energy required to operate a strapdown inertial system is supplied by :',
      options: ['A dedicated pneumatic system.', 'The bled air system.', 'The electrical system.', 'The hydraulic system.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_053',
      question: 'The accelerometers of a strapdown inertial reference system are in line with :',
      options: ['The aircraft axes.', 'The geographical directions.', 'The local vertical and the local meridian.', 'The local meridian and parallel.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_054',
      question: 'If the navigation function of an INS is inoperative, the back up mode if existing, used to operate the INS is :',
      options: ['The GS mode, which supplies ground speed and heading data.', 'The ATT mode, which allows to maintain pitch attitude only.', 'The OFF mode, which turns off the navigation mode but recovers the heading mode.', 'The ATT mode, which supplies attitude and heading data.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_055',
      question: 'The navigation precision of a stand-alone inertial system decreases along the flight due to :',
      options: ['The acceleration of the aircraft.', 'The motion of the aircraft.', 'The drift of the gyroscopes.', 'The meteorological conditions.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_056',
      question: 'When the rotary knob on the INS control panel is set to “NAV” mode, it is :',
      options: ['The navigation mode allowing all of the functions of the system except heading.', 'The navigation mode allowing all of the functions of the system except attitude.', 'The normal operating mode allowing all of the functions of the system.', 'The alignment function in flight.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_057',
      question: 'Compared with a conventional gyro, a laser gyro:',
      options: ['Has a longer life cycle.', 'Consumes more power.', 'Is influenced by temperature.', 'Is more cumbersome.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_058',
      question: 'The alignment of a gyro stabilized inertial platform consists of positioning the platform relative to ;',
      options: ['The local vertical and true north.', 'The pitch axis only.', 'The pitch and roll axes.', 'The roll axis only.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_059',
      question: 'The drift of the gyroscope of a stand-alone inertial system:',
      options: ['Is not a source of error.', 'Induces a bounded error.', 'Induces a position error that decreases along the flight.', 'Is the main source of error.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_060',
      question: 'What is the Schuler period?',
      options: ['48 minutes.', '84 seconds.', '48 seconds.', '84 minutes.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_061',
      question: 'To obtain heading information from a gyro-stabilised platform, the gyros should be ?',
      options: ['1 degree of freedom and a horizontal axis.', '1 degrees of freedom and a vertical axis.', '2 degree of freedom and a horizonal axis.', '2 degree of freedom and a vertical axis.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_062',
      question: 'While inertial platform system is operating on board an aircraft, it is necessary to use a device with the\nfollowing characteristics, in order to keep the vertical line with the pendulous system?',
      options: ['With damping and a period of about 84 minutes.', 'With damping and a period of about 84 seconds.', 'Without damping and a period of about 84 minutes.', 'Without damping and a period of about 84 seconds.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_063',
      question: 'Heading information given by a gyro platform is given by a gyro with?',
      options: ['3 degrees of freedom in the vertical axis.', '3 degrees of freedom in the horizontal axis.', '2 degrees of freedom in the vertical axis.', '1 degrees of freedom in the horizontal axis.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_064',
      question: 'The amber ALERT light on an INS control and display unit?',
      options: ['Illuminates steadily for 2 minutes before reaching the next waypoint.', 'Flashes for 2 minutes before reaching the next waypoint.', 'Illuminates if power from the aircraft bus bar has been lost and the system is operating on standby battery.', 'Illuminates steadily after passing a waypoint in manual mode, until the next leg is programmed in.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_067',
      question: 'At the second state of integration E/W speed is converted into E/W distance gone.\nTo convert this departure into change of longitude it has to ?',
      options: ['Be divided by the secant of latitude.', 'Be multiplied by the secant of latitude.', 'Be divided by the tangent of latitude.', 'Be multiplied by the Cosine of latitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_066',
      question: 'An INS with the accelerometers aligned N/S and E/W is limited to use at latitudes below about 82°. This is\nbecause ?',
      options: ['It loses horizontal reference as dip becomes large.', 'At high speed on East or West tracks the rate of convergency is faster than the azimuth motor can correct.', 'The functions of secant latitude and tangent latitude used in certain corrections in the computer start to approach infinity and the computer cannot handle the rapid changes involved.', 'The correction for the Coriolis effect of the earth rotation approaches infinity above 82° latitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_067_2',
      question: 'The diagram below shows a gyro-stabilised platform. 1 is a ………… gyro gimbal and 2 is a …… gimbal?',
      options: ['Roll Pitch.', 'Pitch Roll.', 'Roll Yaw.', 'Pitch Roll.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_068',
      question: 'The vertical reference unit of a three axis data generator is equipped with a gyro with?',
      options: ['1 degree of freedom and a horizontal spin axis.', '1 degree of freedom and a vertical spin axis.', '2 degrees of freedom and a horizontal spin axis.', '2 degrees of freedom and a vertical spin axis.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_069',
      question: 'With reference to Inertial Navigation Systems, the functions of the integrator are ?\n\n 1. At the second stage integration to suppress unbounded errors (when in nav mode).\n 2. At the first stage of integration to convert accelerations with respect to time, into speed, (when in nav\n mode).\n 3. At the second stage of integration to convert speed with respect to time, into distance gone, (when in\n nav mode).\n 4. To align the platform (when in level and align modes).',
      options: ['All of the above statements are correct.', 'Only statements 2, 3 and 4 are correct.', 'Only statements 1, 2 and 3, are correct.', 'Only statements 2 and 3 are correct.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_070',
      question: 'Ring laser gyros use dither motors to?',
      options: ['Reduce random wander.', 'Prevent unbounded errors.', 'Level and align the gyros.', 'Prevent lock in of the laser beams.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_071',
      question: 'The product of the first integration of the E/W acceleration sensed by an INS system is?',
      options: ['Departure.', 'Speed along the local parallel.', 'Speed along the local horizontal.', 'Distance.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_072',
      question: 'Why is an INS platform virtually unusable at very high latitudes?',
      options: ['The value of the earth rate affecting the E/W accelerometer is a component dependent on the sine lat. At high latitudes this component is nearly zero and makes alignment to true north virtually impossible.', 'The value of the earth rate affecting the E/W accelerometer is a component dependent on the sine lat. At high latitudes this component is nearly zero and makes alignment to true magnetic virtually impossible.', 'The value of the earth rate affecting the E/W accelerometer is a component dependent on the cosine lat. At high latitudes this component is nearly zero and makes alignment to magnetic north virtually impossible.', 'The value of the earth rate affecting the E/W accelerometer is a component dependent on the cosine lat. At high latitudes this component is nearly zero ang makes alignment to true north virtually impossible.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_073',
      question: 'A longitude error in an INS will cause :',
      options: ['A failure to align.', 'Poor alignment and degraded accuracy.', 'Will be corrected for once the E/W accelerometer has aligned to true north.', 'Will cause no problems at all.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_074',
      question: 'When using an INS platform Coriolis affects?',
      options: ['The N/S accelerometer.', 'The E/W accelerometer.', 'Both a, and b.', 'Neither a, nor b.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_075',
      question: 'The errors of an INS fall into three categories?',
      options: ['Bounded, unbounded and velocity.', 'Coriolis, unbounded and inherent.', 'Bounded, unbounded and inherent.', 'Bounded, unbounded and accelerometer.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_076',
      question: 'The fundamental difference between INS and IRS is that?',
      options: ['The INS is a strap down system with 2 accelerometers mounted at 90° to each other.', 'The IRS is a strap down system with 2 accelerometers mounted at 90° to each other.', 'The INS is a strap down system with 3 accelerometers mounted at 90° to each other.', 'The IRS is a strap down system with 3 accelerometers mounted at 90° to each other.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_077',
      question: 'The position accuracy of an RLG INS is?',
      options: ['1 nm/hr.', '2 nm/hr.', '5 nm/hr.', '10 nm/hr.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_078',
      question: 'The control and display unit of an inertial navigation system indicates a position of 4810.9°N 00012.2°W on a\nramp position 4807.5°N 00005.1°E. What is the radial error rate of the system if it has been in NAV mode for 8\nhours 20 minutes?',
      options: ['1.37 Km/hr.', '1.37 Nm/hr.', '11.42 Nm/hr.', '14.3 Nm/hr.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_079',
      question: 'In an INS a TAS input is?',
      options: ['Not required.', 'Required for polar navigation.', 'Required for great circle navigation.', 'Required in order to provide a wind velocity read out.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_080',
      question: 'In an INS which is Schuler tuned, the largest unbounded errors are?',
      options: ['Due to the output of the first stage integrators.', 'Due to the real wander of the platform gyroscopes.', 'Due to accelerometer errors.', 'Track errors due to initial platform misalignment.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_081',
      question: 'During initialization of an INS the aircraft must not be moved until?',
      options: ['The ramp position has been inserted and checked.', 'The platform is levelled.', 'The gyros and the accelerometers are all in the NULL position.', 'The green READY NAV light is illuminated and the mode selector switch has been set to the NAV position.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_082',
      question: 'An INS in the ALIGN mode will?',
      options: ['Not accept an error on 10° latitude and 10° longitude of the inserted initial position.', 'Accept an error of 10° latitude and 10° of longitude of the inserted position.', 'Accept an error of 10° latitude but not an error of 10° longitude of the inserted initial position.', 'Accept an error of 10° longitude but not one of 10° of latitude in the inserted initial position.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_083',
      question: 'An IRS with laser gyros should (i) ……….. be Schuler tuned, and (ii) ……… be strapped down?',
      options: ['(i) always (ii) always.', '(i) always (ii) never.', '(i) never (ii) always.', '(i) never (ii) never.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_084',
      question: 'Laser gyros are used in an IRS. Why must accurate latitude and longitude be inserted?',
      options: ['To determine magnetic north.', 'To check the function of the laser gyros.', 'To determine the computed trihedron.', 'To compensate for aircraft movement.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_085',
      question: 'The triangular cavity in a RLG is filled with which combination of gasses?',
      options: ['Helium and argon.', 'Hydrogen and neon.', 'Helium and neon.', 'Hydrogen and argon.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_086',
      question: 'Alignment of a RLG INS takes?',
      options: ['Less than 10 minutes.', '10 to 15 minutes.', '15 to 20 minutes.', '84.4 minutes.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_087',
      question: 'In an INS the gyros should ……….. be strap down. In an IRS the gyros should ….. be strapped down?',
      options: ['Always never.', 'Always always.', 'Never always.', 'Never never.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_088',
      question: 'In order to align a strap-down inertial unit, it is required to insert the local geographical coordinates. This is\nnecessary to?',
      options: ['Position the computing trihedron with reference to the earth.', 'Check operation of the laser gyros.', 'Determine magnetic or true heading.', 'Re-erect laser gyros.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_089',
      question: 'When initial position is put into an INS system?',
      options: ['If rejects initial latitude or longitude errors.', 'It rejects initial longitude errors, but will accept latitude errors.', 'It rejects initial latitude errors, but accepts initial longitude errors.', 'It accepts both longitude and latitude errors.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_090',
      question: 'IRS is different from INS in that it?',
      options: ['Its strapped down accelerometers are not rotated with the aircraft and hence do not suffer schuler errors.', 'It requires no corrections for central accelerations or Coriolis effects.', 'It suffers laser lock but spins up faster.', 'It is not affected by vertical accelerations due to gravity, but it requires a longer spin-up time.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_091',
      question: 'In an IRS system?',
      options: ['Both the platform and accelerometers are strapped down.', 'Both the platform and accelerometers are gyro-stabilised.', 'The platform is gyro-stabilised but the accelerometers are strapped down.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_092',
      question: 'The sequences for switching on INS is?',
      options: ['Off, Standby, Align, Nav.', 'Off, Align, Standby, Nav.', 'Off, On, Align, Standby.', 'Off, Align, On, Standby.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_093',
      question: 'The correct latitude must be put into INS?',
      options: ['Because it cannot detect initial latitude.', 'Because it cannot detect latitude changes.', 'Because small latitude errors will not be detected but will cause unbounded errors during the subsequent flight.', 'Large latitude errors will be undetected but cause large errors during the subsequent flight.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_094',
      question: 'During initial alignment the IRS must be given coordinates to?',
      options: ['Establish true magnetic north.', 'Test the accuracy and serviceability of the laser ring gyros.', 'Establish the trihedron with reference to the earth.', 'Input initial heading information.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_095',
      question: 'The schuler period is?',
      options: ['12 minutes.', '20 minutes.', '84 minutes.', '98 minutes.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_096',
      question: 'The selection on an IRS mode panel are used in the following order ?',
      options: ['OFF STBY ALIGN ATT NAV.', 'OFF ALIGN STBY NAV ATT.', 'OFF ALIGN STBY ATT NAV.', 'OFF STBY ALIGN NAV ATT.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_097',
      question: 'Where would a rate integrating gyro be used?\n\n 1. Turn and slip indicators.\n 2. Servo stabilizer mechanisms.\n 3. Autopilots.\n 4. Inertial attitude units.\n 5. Inertial navigation units.',
      options: ['1 2, 3, 4.', '2, 4, ,5.', '3, 4, 5.', '4, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_098',
      question: 'The schuler period is?',
      options: ['1 oscillation in azimuth.', '22 minutes.', '66 minutes.', '84 minutes.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins16_100',
      question: 'Why is the inertial strapdown unit in an IRS programmed with coordinates during alignment?',
      options: ['To compensate for earth rotation errors.', 'To establish the trihedron with reference to the earth.', 'To functionally test the ring laser gyroscopes.', 'To establish magnetic north and true north. MACH'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins17: [
    {
      id: 'ins17_001',
      question: 'If OAT increases whilst maintaining constant CAS and flight level :',
      options: ['TAS decreases.', 'TAS remains constant.', 'Mach number remains constant.', 'Mac number decreases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_002',
      question: 'If OAT decreases while maintaining constant CAS and flight level :',
      options: ['Mach number increases.', 'TAS increases.', 'Mach number remains constant.', 'TAS remains constant.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_003',
      question: 'The Mach meter is subject to position error. The error varies according to :\n\n 1. Angle of attack.\n 2. OAT.\n 3. TAS.\n\nThe combination regrouping all of the correct options is :',
      options: ['1, 3.', '3.', '1.', '1, 2, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_004',
      question: 'The Mach meter is subject to position error. This error results from :',
      options: ['Incorrect pressure sensing caused by disturbance of airflow around the pitot tube or the static ports.', 'Imperfect elasticity of the aneroid capsule.', 'Incorrect altimeter setting.', 'Non standard atmospheric conditions.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_005',
      question: 'The Mach meter is subject to position errors. The value of this error varies according to :',
      options: ['OAT only.', 'TAS and OAT.', 'TAS only.', 'TAS and angle of attack.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_006',
      question: 'An aeroplane is flying at FL140, with a CAS of 260 knots in standard conditions. The mach number is :',
      options: ['0.53.', '0.41.', '0.43.', '0.51.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_007',
      question: 'Am aeroplnae is flying at FL300 with a TAS of 470 knots in standard conditions. The Mach number is :',
      options: ['0.83.', '0.53.', '0.80.', '0.82.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_008',
      question: 'The Mach meter is subject to position errors. The error concerns :',
      options: ['Alternate static sources only.', 'Static ports only.', 'Pitot tubes only.', 'Pitot tubes and static ports.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_009',
      question: 'How will mach meter indication respond if an aircraft is flying at constant CAS at FL270 when it experiences a\nreduction in OAT?',
      options: ['No change.', 'Increase.', 'Decrease.', 'Increase or decrease depending on TAT.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_010',
      question: 'What is the LSS at 30000 ft if ambient temperature is - 40° C?',
      options: ['579 Kts.', '660 Kts.', '584 Kts.', '594 Kts.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_011',
      question: 'Which of the following best defines Mach number ?',
      options: ['The ratio of TAS : LSS.', 'The ratio of LSS : TAS.', 'The ratio of CAS : LSS.', 'The ratio of ambient density to that at msl in the ISA.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_012',
      question: 'A mach meter comprises of ?',
      options: ['A combination of ASI and altimeter.', 'A combination of VSI and altimeter.', 'An ASI with its scale marked in mach numbers.', 'An altimeter with its scale marked in mach numbers.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_013',
      question: 'What is the LSS at 40000 ft in the ISA?',
      options: ['542 Kts.', '660 Kts.', '573 Kts.', '550 Kts.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_014',
      question: 'How will mach meter indication vary in a constant CAS climb?',
      options: ['Increase.', 'Decrease.', 'Increase then remain constant.', 'Remain constant.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_015',
      question: 'What is the LSS at msl ISA ?',
      options: ['600 Kts.', '550 Kts.', '750 Kts.', '661 Kts.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_016',
      question: 'Mach meter indications?',
      options: ['Vary with airspeed and temperature.', 'Vary only with airspeed.', 'Vary only with temperature.', 'Vary with density and altitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_017',
      question: 'How will mach meter indication respond if an aircraft passes through a cold front when flying at constant CAS\nand altitude?',
      options: ['Increase.', 'Decrease.', 'Remain constant.', 'Increase or decrease depending on altitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_018',
      question: 'How will he mach meter respond in a constant CAS climb if the static source becomes blocked ?',
      options: ['Increase.', 'Decrease.', 'Remain constant.', 'Increase or decrease depending on airspeed.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_019',
      question: 'How will the mach meter respond in a constant TAS climb if the static source becomes blocked?',
      options: ['Increase.', 'Decrease.', 'Remain constant.', 'Increase or decrease depending on airspeed.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_020',
      question: 'How will the mach meter respond in a constant mach number climb if the static source becomes blocked ?',
      options: ['Increase.', 'Decrease.', 'Remain constant.', 'Increase or decrease depending on airspeed.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_021',
      question: 'The indications on a mach meter are independent of ?',
      options: ['Dynamic pressure.', 'Ambient temperature.', 'Static pressure.', 'Total pressure.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_022',
      question: 'What happens to mach meter indication in a constant RAS climb?',
      options: ['Increases.', 'Decreases.', 'Increases then remains constant.', 'Increases unless in an inversion or isothermal layer.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_023',
      question: 'What would happen if the static pipe became detached from the back of a mach meter in a pressurized aircraft at\nhigh altitude ?',
      options: ['Under read.', 'Over read.', 'No effect.', 'Under read or over read depending on temperature.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_024',
      question: 'If an aircraft climbs at constant TAS from FL 200 to FL 400 the mach meter indication will ?',
      options: ['Increase.', 'Decrease.', 'Increase then remain constant.', 'Decrease then remain constant.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_025',
      question: 'A mach meter is made up of ?',
      options: ['An altimeter with a density capsule.', 'An ASI with an altitude capsule.', 'A VSI with a modified scale.', 'An ASI with a modified scale.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_026',
      question: 'V MO is calculated based on ?',
      options: ['TAS.', 'RAS.', 'CAS.', 'EAS.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_027',
      question: 'Mach number is the ratio of ?',
      options: ['IAS : TAS.', 'CAS : LSS.', 'TAS : LSS.', 'RAS : TAS.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_028',
      question: 'If the static source becomes blocked the mach meter will ….. as an aircraft climbs ?',
      options: ['Over indicate.', 'Under indicate.', 'Not indicate.', 'Freeze.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_029',
      question: 'If temperature decreases when flying at constant CAS at FL 200, the mach meter indication will ….. and the\ntrue mach number will …..?',
      options: ['Increase increase.', 'Decrease decrease.', 'Not change not change.', 'Not change increase.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_030',
      question: 'Mach meter indications?',
      options: ['Are temperature related.', 'Increase with temperature.', 'Decrease with temperature.', 'Are independent of temperature.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_031',
      question: 'The speed of sound an ISA msl is ?',
      options: ['550 Kts.', '560 Kts.', '660 Kts.', '670 Kts.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_032',
      question: 'If ambient temperature is - 10° C, what is the mach number when TAS is 594 Kts?',
      options: ['0.5M.', '0.75M.', '0.94M.', '1.5M.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_033',
      question: 'The speed of sound at 25000 ft ISA is ?',
      options: ['600 Kts.', '602 Kts.', '604 Kts.', '606 Kts.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_034',
      question: 'What is true mach number at 25000 ft ISA if the TAS is 500 Kts?',
      options: ['0.75M.', '0.83M.', '0.90M.', '0.93M.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_035',
      question: 'A mach meter indicates mach number based on the ratio of?',
      options: ['Static pressure to pitot pressure.', 'Pitot pressure to static pressure.', 'Dynamic pressure to static pressure.', 'Static pressure to dynamic pressure.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_036',
      question: 'How will CAS respond if temperature increases by 5 degrees C when flying at a constant indicated mach\nnumber at FL290?',
      options: ['Increases.', 'Decreases.', 'Remains approximately constant.', 'Depends on conditions relative to ISA.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_037',
      question: 'What happens to TAT when an aircraft descends at constant indicated mach number ?',
      options: ['Increases.', 'Decreases.', 'Remain constant.', 'Remains constant then increases.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_038',
      question: 'What is actually measured by a mach meter?',
      options: ['Pitot pressure.', 'The ratio of (pitot pressure – static pressure) : static pressure.', 'The ratio of static pressure to dynamic pressure.', 'The ratio of (static pressure + pitot pressure) : pitot pressure.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_039',
      question: 'When descending at constant CAS, and TAT and mach meter indications should?',
      options: ['Increase. Increase.', 'Increase. Decrease.', 'Increase then remain constant decrease.', 'Remain constant remain constant.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_040',
      question: 'Mach meter indications are derived from ?',
      options: ['(P T – P S )/P T .', '(P S – P T )/P S .', '(P T – P S )/P S .', '(P S – P T )/P T .'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_041',
      question: 'If temperature increases by 5 degree C during a constant mach number descent.\nWhat will happen to CAS?',
      options: ['Increase by 5 Kts.', 'Increase by 10 Kts.', 'Remain constant.', 'Increase or decrease depending on whether conditions are above or below ISA.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_042',
      question: 'A mach meter compares?',
      options: ['(PT – PS) to PT.', '(PS – PT) to PS.', '(PT – PS) to PS.', '(PS – PT) to PT.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_043',
      question: 'What does mach number represent ?',
      options: ['The CAS of an aircraft as a fraction of the local speed of sound.', 'The local speed of sound as a fraction of the CAS of an aircraft.', 'The TAS of an aircraft as a fraction of the local speed of sound.', 'The local speed of sound as a fraction of the CAS of an aircraft.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_044',
      question: 'What is the local speed of sound at sea level if the ambient temperature is 20° C?',
      options: ['661 Kts.', '666 Kt.s', '677 Kts.', '680 Kts.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_045',
      question: 'If ambient temperature increases by 10 degrees, for an aircraft flying at constant TAS, the indicated mach\nnumber will ……. And the true mach number will ……?',
      options: ['Increase increase', 'Decrease decrease.', 'Not change increase.', 'Not change decrease.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_046',
      question: 'When climbing at constant mach number below the tropopause in the ISA, the CAS will?',
      options: ['Increase.', 'Decrease.', 'Remain constant.', 'Decrease then remain constant.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_047',
      question: 'When descending at constant CAS, if temperature remains constant the indicated mach number will?',
      options: ['Remain constant.', 'Increase.', 'Decrease.', 'Increase exponentially.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins17_048',
      question: 'What should the mach meter indicate when flying at 500 kts TAS at FL250, if the ambient temperature is - 30°\nC?',
      options: ['0.52M.', '0.62M.', '0.72M.', '0.82M. PITOT STATICS'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins18: [
    {
      id: 'ins18_001',
      question: 'Concerning the pitot static system, the static pressure error :',
      options: ['Is a direct effect of blockage of the static ports.', 'Is a direct effect of heating of the static ports.', 'Affects the alternate static source only.', 'Is caused by disturbed airflow around the static ports.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_002',
      question: 'The output data from the ADC are used by :\n\n 1. Transponder.\n 2. EFIS.\n 3. Automatic Flight Control System (AFCS).\n\nThe combination that regroups all of the correct statements is :',
      options: ['2, 3.', '1, 3.', '1, 2, 3.', '1, 2.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_003',
      question: 'The ADC uses the following parameters as input data :',
      options: ['Mach number, barometric altitude, CAS.', 'TAS, barometric altitude, TAT.', 'Static pressure, total pressure, TAT.', 'Total pressure, static pressure, TAT, EGT.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_004',
      question: 'The ADC uses the following parameters as input data :',
      options: ['Static pressure, total air pressure, total air temperature.', 'TAS, CAS, altitude, total air temperature.', 'Static pressure and total pressure only.', 'TAS, altitude, vertical sped, SAT.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_005',
      question: 'The alternate static source of a light non-pressurised aeroplane is located in the flight deck.\nWhen used the altimeter :',
      options: ['Tends to over read.', 'Tens o under read.', 'Is blocked.', 'Indicates zero.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_006',
      question: 'The alternate static source of a light non-pressurised aircraft is located in the flight deck.\nWhen it is used, the static pressure sensed is likely to be :',
      options: ['Lower than ambient pressure if QNH is greater than 1013 hPa.', 'Lower than ambient pressure due to aerodynamic suction.', 'Higher than ambient pressure due to aerodynamic suction.', 'Higher than ambient pressure if QNH is greater than 1013 hPa.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_007',
      question: 'The total pressure head comprises a mast which moves its port to a distance from the aircraft skin in order :',
      options: ['To not disturb the aerodynamic flow around the aircraft.', 'To locate it outside the boundary layer.', 'To protect it from icing.', 'To make it easily accessible during maintenance.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_008',
      question: 'The open ended tube parallel o the longitudinal axis of the aircraft senses the:',
      options: ['Total pressure.', 'Static pressure.', 'Dynamic pressure.', 'Total pressure plus static pressure.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_009',
      question: 'Concerning the pitot and static system, the static pressure error varies according to :\n\n 1. Altimeter setting.\n 2. Speed.\n 3. Angle of attack.\n\nThe combination regrouping all of the correct statements is :',
      options: ['2 and 3.', '1 and 2.', '1, 2 and 3.', '1 and 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_010',
      question: 'The alternative static source is used :',
      options: ['To compensate the hysteresis of the aneroid capsule.', 'To compensate the static pressure error.', 'When the drain holes freeze.', 'When the static ports become blocked.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_011',
      question: 'The data output from an ADC include.\n\n 1. Barometric altitude.\n 2. Mach number.\n 3. CAS.\n 4. TAS.\n 5. SAT.\n\nThe combination that regroups all of the correct statements is :',
      options: ['1, 4.', '1, 3, 5.', '1, 2, 3, 4, 5.', '2, 3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_012',
      question: 'In case of accidental closing of an aircraft’s left static pressure port (rain, birds), the altimeter?',
      options: ['Over reads the altitude in case of a side – slip to the right and displays the correct information during symmetric flight.', 'Keeps on providing reliable reading in all situations.', 'Under reads the altitude.', 'Over reads the altitude in case of a sideslip to the left and displays the correct information during symmetric flight.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_013',
      question: 'If an aircraft is equipped with one altimeter which is compensated for position error and another altimeter which\nis not, and all other factors being equal ?',
      options: ['At high speed the non-compensated altimeter will indicate a lower altitude.', 'There will be no difference between them if the air data computer (ADC) is functioning normally.', 'ATC will get an erroneous altitude report SSR.', 'At high speed, the non-compensated altimeter will indicate a higher altitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_014',
      question: 'An Air Data Computer (ADC)?',
      options: ['Measures position error in the static system and transmits this information to ATC to provide correct altitude reporting.', 'Transforms air data measurements into electric impulses driving servo motors in instruments.', 'Is an auxiliary system that provides altitude information in the event that the static source is blocked.', 'Converts air data measurements given by ATC from the ground in order to provide correct altitude and speed information.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_015',
      question: 'In An Air Data Computer (ADC), aeroplane altitude is calculated from ?',
      options: ['The difference between absolute and dynamic pressure at the fuselage.', 'Measurement of outside air temperature (OAT).', 'Measurement of elapsed time for a radio signal transmitted to the ground surface and back.', 'Measurement of absolute barometric pressure from a static source on the fuselage.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_016',
      question: 'In a non -pressurized aircraft, if one or several static pressure ports are damaged, there is an ultimate emergency\nmeans for restoring a practically correct static pressure intake?',
      options: ['Breaking the rate-of climb indicator glass window.', 'Slightly opening a window to restore the ambient pressure in the cabin.', 'Descending as much as possible in order to fly at a pressure as close to 1013.25 hPa as possible.', 'Calculating the ambient static pressure, allowing for the altitude and QNH and adjusting the instruments.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_017',
      question: 'The altimeter consists of one or several aneroid capsules located in a sealed casing. The pressures in the aneroid\ncapsule (i) and casing (ii) are respectively?',
      options: ['(i) static pressure (ii) Total pressure.', '(i) Vacuum (or very low pressure) (ii) Static pressure.', '(i) Static pressure at time t (ii) Static pressure at time t – t.', '(i) total pressure (ii) Static pressure.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_018',
      question: 'From the ISA table at page 35, the atmospheric pressure at FL 70 in a “standard + 10” atmosphere is?',
      options: ['781.8 hPa.', '942.13 hPa.', '1 013.25 hPa.', '644.41 hPa.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_019',
      question: 'The QNH is by definition the value of the ?',
      options: ['Altimeter setting so that the needles indicate zero when the aircraft is on ground at the location for which it is provided.', 'Atmospheric pressure at the level of the ground over flown by the aircraft.', 'Altimeter setting so that the needles of the altimeter indicate the altitude of the location for which it is given.', 'Atmospheric pressure at the sea level of the location for which it is given.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_020',
      question: 'During a climb after take-off from a contaminated runway, if the total pressure probe of the airspeed indicator is\nblocked, the pilot finds that indicated airspeed?',
      options: ['Decreases abruptly towards zero.', 'Increases steadily.', 'Increases abruptly towards VNE.', 'Decreases steadily.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_021',
      question: 'With a pitot probe blocked due to ice build up, the aircraft airspeed indicator will indicate in descent a?',
      options: ['Increasing speed.', 'Fluctuating speed.', 'Decreasing speed.', 'Constant speed.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_022',
      question: 'After an aircraft has passed through a volcanic cloud which has blocked the total pressure probe inlet of the\nairspeed indicator, the pilot begins a stabilized descent and finds that the indicated airspeed?',
      options: ['Increases steadily.', 'Decreases abruptly towards zero.', 'Decreases steadily.', 'Increases abruptly towards VNE.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_023',
      question: 'The static pressure error of the static vent on which he altimeter is connected varies substantially with the ?',
      options: ['Static temperature.', 'Mach number of the aircraft.', 'Deformation of the aneroid capsule.', 'Aircraft altitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_023_2',
      question: 'The static pressure error of the static vent on which the altimeter is connected varies substantially with the ?',
      options: ['Static temperature.', 'Mach number of the aircraft.', 'Deformation of the aneroid capsule.', 'Aircraft altitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_024',
      question: 'The pressure altitude is the altitude corresponding?',
      options: ['In standard atmosphere, to the reference pressure Ps.', 'In ambient atmosphere, to the pressure Ps prevailing at this point.', 'In standard atmosphere, to the pressure Ps prevailing at this point.', 'In ambient atmosphere, to the reference pressure Ps.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_025',
      question: 'The response time of a vertical speed detector may be increased by adding a?',
      options: ['Correction based on an accelerometer sensor.', 'Bi-metallic strip.', 'Return spring.', 'Second calibrated port.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_026',
      question: 'The density altitude is?',
      options: ['The altitude of the standard atmosphere on which the density is equal to the actual density of the atmosphere.', 'The temperature altitude corrected for the difference between the real temperature and the standard temperature.', 'The pressure altitude corrected for the relative density prevailing at this point.', 'The pressure altitude corrected for the density of air at this point.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_027',
      question: 'On board an aircraft the altitude is measured from the?',
      options: ['Standard altitude.', 'Pressure altitude.', 'Density altitude.', 'Temperature altitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_028',
      question: 'The advantages provided by an air data computer to indicate the altitude are?\n\n 1. Position/ pressure error correction.\n 2. Hysteresis error correction.\n 3. Remote data transmission capability.\n 4. Capability to feed data to a large number of instruments simultaneously.\n\nThe combination of correct statements is?',
      options: ['1, 2, 3, 4.', '2, 3, 4.', '1, 2, 3.', '1, 3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_029',
      question: 'If the static source to an airspeed indicator (ASI) becomes blocked during a descent the instrument will ?',
      options: ['Read zero.', 'Continue to indicate the speed applicable to that at the time of the blockage.', 'Under – read.', 'Over – read.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_030',
      question: 'If the static source to a altimeter becomes blocked during a climb, the instrument will ?',
      options: ['Continue to indicate the reading at which the blockage occurred.', 'Under – read by an amount equivalent to the reading at the time that the instrument became blocked.', 'Over – read.', 'Gradually return to zero.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_031',
      question: 'If the static source of an altimeter becomes blocked during a descent the instrument will?',
      options: ['Gradually indicate zero.', 'Under-read.', 'Indicate a height equivalent to the setting on the millibar subscale.', 'Continue to display the reading at which the blockage occurred.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_032',
      question: 'A leak in the pitot total pressure line of a non-pressurized aircraft o an airspeed indicator would cause it to?',
      options: ['Under – read.', 'Over – read.', 'Over – read in a climb and under – read in a descent.', 'Under – read in a climb and over – read in a descent.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_033',
      question: 'The pressure measured at the forward facing orifice of a pitot tube is the?',
      options: ['Total pressure plus static pressure.', 'Dynamic pressure.', 'Total pressure.', 'Static pressure.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_034',
      question: 'The airspeed indicator circuit consists of pressure sensors. The pitot tube directly supplies?',
      options: ['The total pressure .', 'The static pressure.', 'The total pressure and the static pressure.', 'The dynamic pressure.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_035',
      question: 'The error in altimeter readings caused by the variation of the static pressure near the source is known as?',
      options: ['Position pressure error.', 'Barometric error.', 'Instrument error.', 'Hysteresis effect.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_036',
      question: 'A pitot blockage of both the ram air input and the drain hole with the static port open causes the airspeed\nindicator to?',
      options: ['Read a little high.', 'Read a little low.', 'Freeze at zero.', 'React like an altimeter.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_037',
      question: 'A pitot tube covered by ice which blocks the ram air inlet will affect the following instrument(s)?',
      options: ['Airspeed indicator, altimeter and vertical speed indicator.', 'Airspeed indicator only.', 'Altimeter only.', 'Vertical speed indicator only.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_038',
      question: 'Given : Ts is the static temperature (SAT).\n Tt is the total temperature (TAT).\n Kr is the recovery coefficient.\n M is the Mach number.\n\nThe total temperature can be expressed approximately by the formula?',
      options: ['Tt = Ts (1-0.2 M2).', 'Tt = Ts (1+0.2 Kr.M2).', 'Tt = Ts/(1+0.2 Kr.M2).', 'Tt = Ts (1+0.2 M2).'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_039',
      question: 'The altimeter is fed by ?',
      options: ['Differential pressure.', 'Static pressure.', 'Dynamic pressure.', 'Total pressure.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_040',
      question: 'The vertical speed indicator (VSI) is fed by?',
      options: ['Differential pressure.', 'Static pressure.', 'Dynamic pressure.', 'Total pressure.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_041',
      question: 'The operating principle of the vertical speed indicator (VSI) is based on the measurement of the rate of change\nof?',
      options: ['Kinetic pressure.', 'Static pressure.', 'Dynamic pressure.', 'Total pressure.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_042',
      question: 'What advantages are provided by an ADC, compared to traditional pitot static systems?\n\n (1) Instrument lag is reduced or eliminated.\n (2) Position error is automatically correct for.\n (3) Compressibility error is automatically corrected for.\n (4) A large number of instruments can be fed from one ADC.\n (5) It provides emergency altimeter following main system failure.',
      options: ['(1), (3), (4), (5).', '(1), (2), (3), (4).', '(2), (3), (4), (5).', '(1), (2), (4), (5).'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_043',
      question: 'If the static vents in an un-pressurised aircraft become blocked?',
      options: ['Breaking or opening the windows will enable the altimeter to function.', 'Breaking or opening the windows will enable the ASI to function.', 'Breaking the front glass will enable the altimeter to function.', 'Only instruments fed from an ADC will function.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_044',
      question: 'From where does the ADC obtain its altitude data ?',
      options: ['Barometric information from the static pressure ports.', 'Barometric pressure from the pitot probe.', 'The difference between pitot and static pressures.', 'The time take for a radio signal to rebound from the earth.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_045',
      question: 'What inputs are fed to the ADC?\n\n (1) AOA.\n (2) TAT.\n (3) OAT.\n (4) Dynamic pressure.\n\n (5) Static pressure.\n (6) Total pressure.\n (7) AC electrical power.\n (8) Autopilot commands.',
      options: ['(1), (2), (4), (5), (7).', '(1), (2), (4), (5), (7).', '(1), (2), (5), (6), (7).', '(2), (4), (5), (7), (8).'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_046',
      question: 'Which of the following is correct?',
      options: ['P Tot = P Stat + P Dyn .', 'P itot = P Dyn – P stat .', 'P Dyn = P Tot – P itot .', 'P itot = P Tot + P Dyn .'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_047',
      question: 'Entering ground effect is likely to ?',
      options: ['Decrease static pressure but increase pitot pressure.', 'Decrease pitot pressure but increase static pressure.', 'Increase position errors.', 'Decrease position errors.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_048',
      question: 'If the pitot tube leaks and the pitot drains are blocked in an unpressurised aircraft?',
      options: ['The ASI will over indicate.', 'The ASI will under indicate.', 'The altimeter will under indicate.', 'The altimeter will over indicate.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_049',
      question: 'If the static tube and drains become blocked?',
      options: ['The ASI will under indicate.', 'The ASI will over indicate.', 'The ASI will under or over indicate depending on altitude.', 'The ASI will indicate zero.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins18_050',
      question: 'If the static tube and drains become blocked?',
      options: ['The altimeter will under indicate.', 'The altimeter will indicate zero.', 'The altimeter will over indicate.', 'The altimeter will under or over indicate depending on altitude. RADIO ALTIMETERS'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins19: [
    {
      id: 'ins19_001',
      question: 'During the approach, a crew reads on the radio altimeter the value of 650 ft. this is an indication of the true?',
      options: ['Height of the lowest wheels with regard to the ground at any time.', 'Height of the aircraft with regard to the ground at any time.', 'Height of the aircraft with regard to the runway.', 'Altitude of the aircraft.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_002',
      question: 'For most radio altimeters, when a system error occurs during approach the?',
      options: ['Height indication is removed.', 'DH lamp flashes red and the audio signal sounds.', 'DH lamp flashes red.', 'Audio warning signal sounds.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_003',
      question: 'A radio altimeter can be defined as a ?',
      options: ['Ground radio aid used to measure the rue height of the aircraft.', 'Ground radio aid used to measure the true altitude of the aircraft.', 'Self-contained on-board aid used to measure the true height of the aircraft.', 'Self-contained on-board aid used to measure the true altitude of the aircraft.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_004',
      question: 'The data supplied by a radio altimeter?',
      options: ['Indicates the distance between the ground and the aircraft.', 'Concerns only the decision height.', 'Is used only by the radio altimeter indicator.', 'Is used by the automatic pilot in the altitude hold mode.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_005',
      question: 'The low-altitude radio altimeters used in precision approaches :',
      options: ['3, 5.', '3, 4.', '2, 3, 4.', '1, 2, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_006',
      question: 'In low altitude radio altimeters, the reading is zero when main landing gear wheels are on the ground. For this, it\nis necessary to ?',
      options: ['Change the display scale in short final, in order to have a precise readout.', 'Compensate residual altitude due to antennas height above the ground and coaxial cables length.', 'Account for signal processing time in the unit and apply a correction factor to the reading.', 'Place the antennas on the bottom of the aeroplane.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_007',
      question: 'The operating frequency range of a low altitude radio altimeter is ?',
      options: ['2700 MHz to 2900 MHz.', '5 GHz.', '4200 MHz to 4400 MHz.', '5400 MHz or 9400 MHz.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_008',
      question: 'Modern low altitude radio altimeters emit waves in the following frequency band?',
      options: ['HF (High Frequency).', 'UHF (Ultra High Frequency).', 'SHF (Super High Frequency).', 'VLF (Very Low Frequency).'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_009',
      question: 'The operation of the radio altimeter of a modern aircraft is based on?',
      options: ['Pulse modulation of the carrier wave.', 'A combination of frequency modulation and pulse modulation.', 'Frequency modulation of the carrier wave.', 'Amplitude modulation of the carrier wave.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_010',
      question: 'In low altitude radio altimeters height measurement (above ground) is based upon?',
      options: ['A triangular amplitude modulation wave, for which modulation phase shift between transmitted and received waves after ground reflection is measured.', 'A frequency modulation wave, for which the frequency variation between the transmitted wave and the received wave after ground reflection is measured.', 'A pulse transmission, for which time between transmission and reception is measured on a circular scanning screen.', 'A wave transmission, for which the frequency shift by DOPPLER effect after ground reflection is measured.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_011',
      question: 'The aircraft radio equipment which emits on a frequency of 4400 MHz is the?',
      options: ['Weather radar.', 'Primary radar.', 'Radio altimeter.', 'High altitude radio altimeter.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_012',
      question: 'A radio altimeter is?',
      options: ['Aircraft based and indicates true altitude.', 'Aircraft based and indicates pressure altitude.', 'Aircraft based and indicates true height.', 'Ground based and employ microwaves.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_013',
      question: 'Radio altimeters are based on the principle of ?',
      options: ['Frequency modulated carrier wave.', 'Pulse modulated carrier wave.', 'Amplitude modulated carrier wave.', 'Continuous wave.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_014',
      question: 'For the landing configuration a radio altimeter indicates?',
      options: ['Height of the aircraft above the ground.', 'Height of the flight deck above the ground.', 'Height of the main wheel above the ground.', 'Altitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_015',
      question: 'Low altitude radio altimeters operate on the ……… wavelength?',
      options: ['Metric.', 'Decametric.', 'Centimetric.', 'Millimetric.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_016',
      question: 'Low altitude altimeters uses the ……… waveband?',
      options: ['HF.', 'VHF.', 'UHF.', 'SHF.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_017',
      question: 'If there is a fault in the system the radalt display will?',
      options: ['Needle will disappear and an alarm flag will appear, possibly accompanied by an audio warning.', 'Freeze.', 'Turn red and activate an aural warning.', 'Turn red and activate visual and aural warnings.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_018',
      question: 'A radio altimeter measures?',
      options: ['True Altimate.', 'Pressure altitude.', 'Height above sea level.', 'Height above the ground or water over which the aircraft is flying.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_019',
      question: 'A radalt is?',
      options: ['Ground based nad measures true altitude.', 'Ground based and measures true height.', 'Aircraft based and measures true altitude.', 'Aircraft based and measures true height.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_020',
      question: 'A RADALT provides?',
      options: ['Radio altitude.', 'Pressure altitude.', 'Density altitude.', 'Height above terrain.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_021',
      question: 'The failure of the radio altimeter would cause?',
      options: ['Loss of pressure altitude data.', 'Loss of density altitude data.', 'Loss of altitude data.', 'Loss of height data.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_022',
      question: 'A radio altimeter has a maximum effective height because ?',
      options: ['At greater heights the signal will be too weak.', 'At greater heights the signal will be undetectable.', 'At greater heights the signal will be absorbed by moisture in the air.', 'At greater heights signal from different modulation cycles will overlap.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_023',
      question: 'Radio altimeters works on the principal of?',
      options: ['Frequency modulation.', 'Amplitude modulation.', 'Pulse modulation.', 'Pulse and amplitude modulation.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_024',
      question: 'A RADALT employs ….. waveband?',
      options: ['HF.', 'VHF.', 'UHF.', 'SHF.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_025',
      question: 'Radio altimeters employ?',
      options: ['FM.', 'AM.', 'Pulsed FM.', 'Pulse modulation.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_026',
      question: 'A radio altimeter will indicate zero when the aircraft is on the ground because of?\n\n 1. Frequency modulation of the transmitted signal.\n 2. Allowance for the signal path through the aircraft.\n 3. Allowance for the height of the aerials above the main wheels.\n 4. Beam width compensation.\n 5. Reduction in gain rate vey close to the surface.',
      options: ['1, 2.', '2, 3.', '3, 4.', '4, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_027',
      question: 'Audio altimeters are accurate only within the height range?',
      options: ['Zero to 50 ft.', 'Zero to 500 ft.', '50 ft to 2700 ft.', 'Zero ft to 2500 ft.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_028',
      question: 'The frequency range used by a low altitude radio altimeter is?',
      options: ['5 GHz.', '115 GHz to 750 GHz.', '1200 MHz to 1500 MHz.', '4200 MHz to 4400 MHz.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins19_029',
      question: 'A RADALT system is?',
      options: ['Ground based and measures true altitude.', 'Ground based and measures true height.', 'Aircraft based and measures true altitude.', 'Aircraft based and measures true height. TCAS'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins20: [
    {
      id: 'ins20_001',
      question: 'If a TCAS resolution advisory (RA) requires an immediate descent while at the same time ATC requests an\nimmediate climb, the crew should :',
      options: ['Start a climb and then follow the TCAS RA.', 'Follow the TCAS RA and inform the ATC.', 'Comply with the ATC request.', 'Consider both requests and remain at the same level.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_002',
      question: 'When a TCAS resolution advisory *(A) climb indication is generated, the required vertical speed range\ndisplayed on the vertical speed indicators :',
      options: ['Does not take account of the stall margin.', 'Always takes account of the stall margin.', 'Takes account of a 1.3 Vs stall margin.', 'Takes account of a 1.1 Vs stall margin.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_003',
      question: 'When the TCAS is operating a failure of the active transponder will cause the TCAS to :',
      options: ['No longer operate normally.', 'Operate in the traffic advisory (TA) mode only.', 'Operate normally.', 'Operate in the resolution advisory mode *RA) only.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_004',
      question: 'A TCAS Resolution Advisory (RA) voice message “CLIMB – CLIMB NOW” requested twice is generated :',
      options: ['After a “CLIMB” RA when the climb vertical rate is too weak.', 'Each time a “CLIMB” RA is announced by a voice message.', 'When cleared of conflict, and below the cruise altitude.', 'After a “DESCEND” RA when a reversal in the vertical manoeuvre is required.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_005',
      question: 'When comparing a TCAS (TA) and a Resolution Advisory (RA), which of the following statements is correct ?',
      options: ['A TA provides the display of the traffic on the navigation display and the red arc on the vertical speed indicator, an RA provides voice alerts.', 'An RA generates the intruders colour codes on the navigation display according to the threat, a TA manages the other TCAS functions.', 'A TA indicates the relative position of the intruding traffic, an RA provides a vertical traffic avoidance manoeuvre.', 'An RA indicates the relative position of the intruding traffic, a TA provides a vertical traffic avoidance manoeuvre.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_006',
      question: 'With TCASII, when a corrective resolution is generated :',
      options: ['The vertical speed must be effectively modified without delay.', 'The heading must be effectively modified without delay.', 'The is must be effectively modified without delay.', 'No action is required: vertical speed, heading and is can remain unchanged.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_007',
      question: 'The TCAS (Traffic Collision Avoidance System) is a proximity alarm system which detects a “traffic” when the\nconflicting traffic is equipped with a ?',
      options: ['Serviceable SSR transponder.', 'Serviceable weather radar.', 'SELCAL system.', 'DME system.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_008',
      question: 'Concerning the TCAS (Traffic Collision Avoidance System)?',
      options: ['Resolution Advisory (RA) must not be followed without obtaining clearance from ATC.', 'No protection is available against aircraft not equipped with a serviceable SSR transponder.', 'In one of the system modes, the warning, “TOO LOW TERRAIN” is generated.', 'In one of the system modes, the warning, “PULL UP” is generated.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_009',
      question: 'The TCAS (Traffic Collision Avoidance System) gives avoidance resolutions?',
      options: ['In horizontal and vertical planes.', 'Based on speed control only.', 'In the vertical plane only.', 'In the horizontal plane.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_010',
      question: 'In the event of a conflict, the TCAS (Traffic Collision Avoidance System) will give information such as?',
      options: ['Turn left/turn right.', 'Too low terrain.', 'Glide slope.', 'Climb/descent.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_011',
      question: 'The principle of the TCAS (Traffic Collision Avoidance Systems) is based on the use of?',
      options: ['F.M.S. (Flight Management System).', 'Air traffic control radar systems.', 'Transponders fitted in the aircraft.', 'Airborne weather radar system.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_012',
      question: 'The use of the TCAS (Traffic Collision Avoidance System) for avoiding an aircraft in flight is now general.\nTCAS uses for its operation?',
      options: ['Both the replies from the transponders of other aircraft and the ground-based radar echoes.', 'The replies from the transponders of other aircraft.', 'The echoes from the ground air traffic control radar system.', 'Echoes of collision avoidance radar system especially installed on board.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_013',
      question: 'A “TCAS II” (Traffic Collision Avoidance System) provides?',
      options: ['The intruder relative position and possibly an indication of a collision avoidance manoeuvre within both the vertical and horizontal planes.', 'The intruder relative position and possibly an indication of a collision avoidance manoeuvre within the horizontal plane only.', 'The intruder relative position and possibly an indication of a collision avoidance manoeuvre within the vertical plane only.', 'A simple intruding airplane proximity warning.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_014',
      question: 'The TCAS II data display devices can be in the form of :\n\n 1. A specific dedicated screen.\n 2. A screen combined with the weather radar.\n 3. A variometer represented on a liquid crystal screen which allows the display of Traffic Advisory (TA)\n and Resolution Advisory (RA).\n 4. An EFIS (Electronic Flight Instrument System) screen.\n\nThe combination regrouping all the correct statements is ?',
      options: ['1, 2 and 3.', '3 and 4.', '1 and 3.', '1, 2, 3 and 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_015',
      question: 'A “close traffic advisory” is displayed on the display device of the TCAS 2 (Traffic Collision Avoidance\nSystem) by ?',
      options: ['A blue or white full lozenge.', 'A red full square.', 'A blue or white empty lozenge.', 'An orange full circle.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_016',
      question: 'A “resolution advisory” (RA) is represented on the display system of the TCAS 2 (Traffic Collision Avoidance\nSystem) by a?',
      options: ['Blue or white empty lozenge.', 'Red full circle.', 'Red full square.', 'Blue or white full lozenge.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_017',
      question: 'An “intruding traffic advisory” is represented on the display system of the TCAS 2 (Traffic Collision Avoidance\nSystem) by displaying?',
      options: ['A red full square.', 'A yellow full circle.', 'A blue or white empty lozenge.', 'A blue or white full lozenge.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_018',
      question: 'On a TCAS2 (Traffic Collision Avoidance System), a corrective “resolution advisory” (RA) is a “resolution\nadvisory”?',
      options: ['Asking the pilot to modify effectively the vertical speed of his aircraft.', 'Which does not require any action from the pilot but on the contrary asks him not to modify his current vertical speed rate.', 'Asking the pilot to modify the heading of his aircraft.', 'Asking the pilot to modify the speed of his aircraft.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_019',
      question: 'When the intruding aircraft is equipped with a serviceable mode C transponder, the TCAS II (Traffic Collision\nAvoidance System) generates a?',
      options: ['“Traffic advisory”, vertical and horizontal “resolution advisory”.', '“Traffic advisory”, and vertical “resolution advisory”.', '“Traffic advisory” and horizontal “resolution advisory”.', '“Traffic advisory” only.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_020',
      question: 'When the intruding aircraft is equipped with a transponder without altitude reporting capability, the TCAS\n(Traffic Collision Avoidance System) issues a?',
      options: ['“Traffic advisory” and horizontal “resolution advisory”.', '“Traffic advisory”, vertical and horizontal “resolution advisory”.', '“Traffic advisory” only.', '“Traffic advisory” and vertical “resolution advisory”.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_021',
      question: 'The TCAS (Traffic Collision Avoidance System) computer receives information :\n\n 1. About the pressure altitude through the mode S transponder.\n 2. From the radio altimeter.\n 3. Specific to the airplane configuration.\n 4. From the inertial units.\n\nThe combination regrouping all the correct statements is ?',
      options: ['1, 2, 4.', '1, 2.', '1, 2, 3.', '1, 2, 3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_022',
      question: 'The TCAS 2 (Traffic Collision Avoidance System) provides :\n\n 1. Traffic information (TA : Traffic Advisory).\n 2. Horizontal resolution (RA : Resolution Advisory).\n 3. Vertical resolution (RA : Resolution Advisory).\n 4. Ground proximity warning.\n\nThe combination regrouping all the correct statements is?',
      options: ['1, 2, 3.', '1, 2, 3, 4.', '1, 3.', '1, 2.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_023',
      question: 'The TCAS 1 (Traffic Collision Avoidance System) provides :\n\n 1. Traffic information.\n 2. Horizontal resolution (RA : Resolution Advisory).\n 3. Vertical resolution (RA : Resolution Advisory).\n 4. Ground proximity warning.\n\nThe combination regrouping all the correct statements is?',
      options: ['1, 2, 3.', '1, 2, 3, 4.', '1.', '1, 2.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_024',
      question: 'On a TCAS 2 (Traffic Collision Avoidance System) the preventive “resolution advisory” (RA) is a “resolution\nadvisory”?',
      options: ['That advises the pilot to avoid certain deviations from the current vertical rate but does not require any change to be made to that rate.', 'Asking the pilot to modify effectively the vertical speed of his aircraft.', 'Asking the pilot to modify the heading of his aircraft.', 'Asking the pilot to modify the speed of his aircraft.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_025',
      question: 'What information will TCAS provide to indicate an intruder aircraft with no altitude reporting facility?',
      options: ['TA.', 'TO plus preventative RA.', 'Preventative RA.', 'Corrective RA.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_026',
      question: 'Where is the TCAS information displayed ?\n\n 1. On a dedicated TCAS display.\n 2. On the weather radar screen.\n 3. On EFIS.\n 4. On an LCD variometer.',
      options: ['1, 2.', '1, 3.', '2, 4.', 'All of the above.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_027',
      question: 'Inputs to TCAS 2 include ?',
      options: ['Mode S transponders to coordinate avoidance manoeuvres.', 'Mode A transponders providing TA and RA data.', 'Mode C transponders coordinating avoidance manoeuvres.', 'Mode C and s transponders giving RA and TA data and coordinating avoidance manoeuvres.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_028',
      question: 'The correct response to a TCAS RA is?',
      options: ['Immediately Turn 45° left and comply with the descent/climb commands.', 'Do nothings because ATC instruction override RA.', 'Comply with descent/climb commands immediately and smoothly.', 'Seek ATC approval before changing altitude, speed or track.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_029',
      question: 'TCAS is based on?',
      options: ['Ground – based radar.', 'Primary radar.', 'Airborne transponders.', 'RT communications and direction finding.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_030',
      question: 'TCAS 2 data is obtained from?\n\n 1. Radio altimeters.\n 2. INS/IRS.\n 3. Pressure altitude data from mode s transponders.\n 4. Additional equipment specific to each aircraft type.',
      options: ['1, 2, 3.', '1, 2, 4.', '2, 3, 4.', 'All of the above.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_031',
      question: 'Preventative RA’s include?',
      options: ['Turn right.', 'Monitor vertical speed.', 'Climb now.', 'Traffic, traffic.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_032',
      question: 'A preventative RA is represented by a ……. On a TCAS PPI?',
      options: ['Red square.', 'Red circle.', 'Red lozenge.', 'Amber square.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_033',
      question: 'When fitted with mode c transponders a TCAS 2 system may provide?',
      options: ['RA only.', 'TA only.', 'Horizontal plane TA and RA.', 'Vertical plane TA and RA.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_034',
      question: 'What level of warning does TCAS provide to indicate aircraft not equipped with TCAS?',
      options: ['TA.', 'RA.', 'None.', 'TA and RA.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_035',
      question: 'TCAS will give…… warning of an aircraft without transponders fitted?',
      options: ['No warning.', 'Bearing only.', 'Altitude only.', 'Range and bearing.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_036',
      question: 'Non – conflicting traffic is indicated by ?',
      options: ['Red.', 'Yellow.', 'Solid cyan.', 'Hollow cyan.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_037',
      question: 'TCAS 2 gives RA in?',
      options: ['Vertical plane only.', 'Horizontal plane only.', 'Both vertical and horizontal planes.', 'None of the above.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_038',
      question: 'TCAS RA is indicated by ?',
      options: ['Amber circle.', 'Amber square.', 'Red square.', 'Red circle.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_039',
      question: 'TCAS 2 display may be provided on?',
      options: ['Dedicated PPI.', 'Weather radar display.', 'EFIS display.', 'Any of the above depending on aircraft type.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_040',
      question: 'TCAS 2 fitted with mode C transponders only can provide?',
      options: ['Ra only.', 'TA only.', 'Vertical TA and RA.', 'Horizontal TA and RA.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_041',
      question: 'Other traffic not constituting a threat is indicated by ….. on TCAS?',
      options: ['Solid red square.', 'Solid yellow circle.', 'Solid cyan or white diamond.', 'Hollow cyan or white diamond.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_042',
      question: 'Corrective actions given by TCAS include?\n\n 1. Turn right or left.\n 2. Descend or climb.\n 3. Increase rate of descent or climb.\n 4. Stop climb or descent.\n 5. Monitor vertical speed.\n 6. Contact ATC.',
      options: ['1, 2, 3, 5.', '2, 3, 4, 5.', '1, 3, 4, 6.', '1, 2, 3, 6.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_043',
      question: 'How should a pilot respond to a TCAS RA?',
      options: ['Visually identify the intruder to before taking corrective action.', 'Disengage the autopilot the immediately comply with climb and descent commands in a smooth manner.', 'Contact ATC before manoeuvring.', 'Allow autopilot to follow TCAS commands, and advise ATC of situation as soon as it is safe to do so.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_044',
      question: 'How should a pilot respond to a TCAS TA?',
      options: ['Visually identify the intruder to before taking corrective action.', 'Disengage the autopilot the immediately comply with climb and descent commands in a smooth manner.', 'Contact ATC before manoeuvring.', 'Allow autopilot to follow TCAS commands, and advise ATC of situation as soon as it is safe to do so.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_045',
      question: 'What corrective action is given by TCAS?',
      options: ['Contact ATC.', 'Climbing or descending right turn.', 'Climbing or descending left turn.', 'Climb or descend.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_046',
      question: 'What does the TCAS indication (in red) at the right mean?',
      options: ['An aircraft 300 ft below is climbing at 500 fpm or more.', 'An aircraft 300 ft above is descending at more than 1000 fpm.', 'An aircraft 300 ft above is climbing at 500 fpm or more.', 'An aircraft 300 ft below is descending at more than 1000 fpm.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_047',
      question: 'What does the TCAS indication (in red) at the right mean?',
      options: ['An aircraft 300 ft below is climbing at 1000 fpm or more.', 'An aircraft 300 ft above is descending at 500 fpm or more.', 'An aircraft 300 ft above is climbing at 1000 fpm.', 'An aircraft 300 ft below is descending at 500 fpm or more.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_048',
      question: 'An intruder 250 ft above, climbing at 500 fpm or more, will be indicated by ?',
      options: ['+250 (Red)', '+250 (Cyan)', '+250 (Amber)', '-250 (Cyan)'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_049',
      question: 'Proximity traffic is defined as?',
      options: ['Traffic with a 6 nm radius and within 1200 ft above or below.', 'Traffic within 10 nm and within 1000 ft above or below.', 'Traffic within the selected range and within 1000 ft above or below.', 'Traffic within the selected range and within 1200 ft above or below.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins20_050',
      question: 'Other traffic is defined as ?',
      options: ['Traffic not qualifying as proximity or intruder but within the display range and within 2700 ft above or below.', 'Traffic not qualifying as proximity but within 16 nm and within 2500 ft above or below.', 'All traffic other than proximity and intruder traffic.', 'All non intruder traffic within the range sale and within 2700 ft above or below. TEMP'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins21: [
    {
      id: 'ins21_001',
      question: 'Given : E = electromotive force EMF. T = hot junction temperature. K = constant. The relationship that applies\nto a thermocouple is :',
      options: ['E = K x SQRT (T).', 'E = K x T squared.', 'E = K x T.', 'E = K + T.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_002',
      question: 'The Total Air Temperature (TAT) is :',
      options: ['The impact air temperature measured by the pitot probe.', 'The static temperature (SAT) multiplied by the recovery factor.', 'The average temperature resulting from the temperature measure of the pitot and TAT probes.', 'The temperature resulting from the aircraft motion through the air.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_003',
      question: 'The Static air Temperature (SAT) is :',
      options: ['The ambient outside air temperature.', 'The TAT divided by the recovery factor.', 'The temperature resulting from the aircraft motion in the air.', 'The outside air temperature measured by the pitot probes.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_004',
      question: 'Given : E = electromotive force emf. Tc = cold junction temperature. Th = hot junction temperature. K =\nconstant. The relationship that applies to a thermocouple is :',
      options: ['E = K x The squared.', 'E = K x The.', 'E = K X Tc.', 'E = K x Tc squared.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_005',
      question: 'Total Air Temperature is …… Than …… by an amount which is proportional to …….?',
      options: ['Higher Static air temperature CAS.', 'Higher Static air temperature TAS.', 'Lower Dynamic air temperature CAS.', 'Higher Static air temperature LSS.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_006',
      question: 'Total air temperature is …………….?',
      options: ['SAT plus kinetic heating effect.', 'SAT plus the heating effect caused by shock waves at high mach numbers.', 'SAT plus skin friction effect.', 'Dynamic heating effect.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_007',
      question: 'What is the ram recovery factor for a Rosemount temperature probe?',
      options: ['0.5.', '1.0.', '1.5.', '2.0.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_008',
      question: 'The formula for TAT is?',
      options: ['TAT = SAT (1 + (0.2 x K x M2).', 'TAT = SAT/(1 + 0.2 x K x M2).', 'TAT = SAT/(1 – 0.2 M2).', 'TAT = SAT (1 – KM2).'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_009',
      question: 'The pointer that aligns with the red line in an EGT gauge?',
      options: ['Is movable to indicate when temperatures have exceeded the red line limit.', 'Is painted on the glass.', 'Is moved only prior to flight.', 'Is moved to set lower limits when required by ambient conditions.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_010',
      question: 'What types of thermometer are used in modern aircraft?\n\n 1. Resistive.\n 2. Mercury.\n 3. Capacitive.\n 4. Inductive.\n 5. Thermocouples.',
      options: ['1, 2, 4.', '1, 3, 4.', '2, 4, 5.', '1, 2, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_011',
      question: 'TAT is?',
      options: ['SAT plus ram rise due to skin friction.', 'SAT plus ram rise due to adiabatic compression.', 'SAT plus ram rise due to shock wave formation.', 'Sat plus gauge error.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_012',
      question: 'The advantages of a thermocouple temperature gauging system are?\n\n 1. Self powered.\n 2. No moving parts in sensors.\n 3. Low voltages.\n 4. Not susceptible to resistance losses.\n 5. Suitable for high temperatures.',
      options: ['1, 2, 3, 4.', '1, 2, 3, 5.', '2, 3, 4, 5.', 'All of the above.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_013',
      question: 'A thermocouple circuit can be graduated to read temperature if?',
      options: ['The hot junction is kept at a constant temperature.', 'The cold junction is kept at a constant temperature.', 'The cold junction is kept at ambient temperature.', 'The cold junction is kept at the same temperature as the hot junction.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_014',
      question: 'What is used to sense temperature in a jet engine turbine and how are they connected?',
      options: ['Thermistor in series.', 'Thermocouples in parallel.', 'Thermocouples in series.', 'Rosemount probes in parallel.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_015',
      question: 'An aircraft is flying at Mach 1 at 36000 ft in the ISA. What TAT will a Rosemount probe indicate?',
      options: ['-13° C.', '13° C.', '-56° C.', '56° C.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_016',
      question: 'The formula for total ait temperature is ?',
      options: ['TAT = SAT + 0.2 M2).', 'TAT = SAT (1 + (0.2 x Kr M2).', 'TAT = SAT (1 - (0.2 x KrM2).', 'TAT = SAT/(1 -KrM2).'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_017',
      question: 'A TAT probe measures using the relationship?',
      options: ['TAT = SAT + heating due to compressibility.', 'TAT - = SAT + Kinetic heating.', 'TAT - = SAT + friction heating.', 'TAT = SAT + convention cooling.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_018',
      question: 'A thermocouple system employs?',
      options: ['Two dissimilar metals jointed at one end and a wheatstone bridge at the other.', 'Two dissimilar metal joined at one end and a ratio meter at the other.', 'Two dissimilar metals joined at both ends and a moving coil instrument.', 'Tow dissimilar metals separated by a dielectric substance at one end and a capacitive gauge at the other.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_019',
      question: 'The resistive temperature sensing system is based on the fact that?',
      options: ['Electrical resistance of metals is constant.', 'Electric resistance of metals increases with increasing temperature.', 'Electrical resistance of metals decreases with increasing temperature.', 'Electrical resistance causes temperature to change.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_020',
      question: 'The bi-metalic temperature sensing system is employed?',
      options: ['Only in low temperature systems.', 'To measure jet pipe temperature.', 'In thermostatic switches.', 'In thermistors.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_021',
      question: 'Methods employed in sensing temperature in aircraft include?\n\n 1. Resistive.\n 2. Inductive.\n 3. Capacitive.\n 4. Expansive.\n 5. Seebeck effect.',
      options: ['1, 2, 4.', '2, 3, 5.', '3, 4, 5.', '1, 4, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_022',
      question: 'At mach 2 a TAT probe will indicate + 45° K in an ambient temperature of ?\n\n(assume K = 0.85).',
      options: ['2.68° K.', '26.78° K.', '67.8° K.', '16.78° K.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_023',
      question: 'Temperature sensing based on varying … are…. Than those using varying …………….>',
      options: ['Current more accurate voltage.', 'Current less accurate voltage.', 'Voltage as accurate current.', 'Voltage less accurate resistance.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins21_024',
      question: 'A Rosemount probe employs an electrical heater to?',
      options: ['Maintain constant temperature.', 'Prevent corrosion of the sensing elements.', 'Prevent icing.', 'Maintain constant electrical resistance. TURN/SLIP'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins22: [
    {
      id: 'ins22_001',
      question: 'The ball in a serviceable slip indicator is …… by ……… and ………….. Indicate/s the state of slip?',
      options: ['Held central Gravity Does not always.', 'Positioned Acceleration Does not always.', 'Held central Gravity Always.', 'Positioned Acceleration Always.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_002',
      question: 'The turn indicator is affected by?\n\n 1. AOB.\n 2. Airspeed.\n 3. Weight.\n 4. Altitude.',
      options: ['1, 2.', '2, 3.', '3, 4.', '4, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_003',
      question: 'A turn indicator used in conjunction with an attitude indicator will show?\n\n 1. Turn direction.\n 2. Rate of turn.\n 3. Angular velocity about the true vertical axis.\n 4. Angular velocity about the aircraft vertical axis.\n 5. Angular velocity about the longitudinal axis.',
      options: ['1, 2.', '1, 3.', '1, 2, 4.', '2, 3, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_004',
      question: 'ROT indications are?',
      options: ['Proportional to TAS.', 'Proportional to CAS.', 'Proportional to mass.', 'Proportional to EAS.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_005',
      question: 'A turn indicator has?\n\n 1. A horizontal spin axis.\n 2. A vertical spin axis.\n 3. One degree of freedom.\n 4. Two degrees of freedom.\n 5. A spin axis tied to the yawing plane of the aircraft.\n 6. A gravity erecting unit.',
      options: ['1, 3.', '1, 5.', '3, 5.', '4, 6.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_006',
      question: 'When both the needle and ball of a turn and slip indicator are displaced to the right the aircraft is?',
      options: ['Turning right with insufficient bank.', 'Turning right with too much bank.', 'Turning left with too much bank.', 'Turning left with insufficient bank.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_007',
      question: 'When both the needle and ball of a turn and slip indicator are displaced to the right the aircraft is?',
      options: ['Turning right with too much TAS.', 'Turning right with insufficient TAS.', 'Turning left with too much TAS.', 'Turning left with insufficient TAS.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_008',
      question: 'When the needle is displaced right and the ball displaced left, in a turn and slip indicator, the aircraft is?',
      options: ['Turning right with insufficient bank.', 'Turning left with too much bank.', 'Turning left with insufficient TAS.', 'Turning right with too much bank.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_009',
      question: 'The turn needle indicates ….. in a slightly banked turn?',
      options: ['Angular velocity about the vertical axis.', 'Angular acceleration about the vertical axis.', 'Angular velocity about the lateral axis.', 'Yaw displacement.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_010',
      question: 'A rate 1 turn at 120 kts requires?',
      options: ['10° AOB.', '20° AOB.', '30° AOB.', '40° AOB.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_011',
      question: 'The correct turn and slip indications when turning right on the ground are?',
      options: ['Needle and ball right.', 'Needle and ball left.', 'Needle right and ball left.', 'Needle left and ball right.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_012',
      question: 'ROT indications depend on?\n\n 1. Airspeed.\n 2. Mass.\n 3. AOB.',
      options: ['1, 2.', '2, 3.', '1, 3.', '1, 2, 3.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_013',
      question: 'For a rate one turn at 150 Kts the AOB must be?',
      options: ['22°.', '33°.', '44°.', '55°.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_014',
      question: 'Following a let engine failure the pilot of a multi-engine aircraft uses rudder to arrest the yaw, whilst side\nslipping down track with the wings held level by the ailerons. What will the turn and slip indicator show in this\ncondition.',
      options: ['Both needle and ball central.', 'Both needle and ball right.', 'Both needle and ball left.', 'Needle left and ball right.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_015',
      question: 'Following a left engine failure the pilot of a multi-engine aircraft uses rudder to oppose yaw and keep the\naircraft on heading, whilst using bank to prevent side slip.\nWhat will the turn and slip indicator show?',
      options: ['Both needle and ball central.', 'Both needle and ball right.', 'Both needle and ball left.', 'Needle central and ball right.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_016',
      question: 'What will be the immediate turn and slip indications when a left engine fails in climbing flight.',
      options: ['Needle and ball left.', 'Needle and ball right.', 'Needle left and ball right.', 'Needle right and ball left.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_017',
      question: 'What does it indicate if both the needle and ball in a turn and slip indicator move out to the right?',
      options: ['Turning right with too much bank.', 'Turning right with too little bank.', 'Turning left with too much bank.', 'Turning left with too little bank.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_018',
      question: 'When turning at constant bank angle the rate of turn is?',
      options: ['Determined by weight and TAS.', 'Determined by weight.', 'Determined by TAS.', 'Determined only by AofA.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_019',
      question: 'A turn indicator used in conjunction with an attitude indicator can show?\n\n 1. TAS in a turn.\n 2. Direction of turn.\n 3. Angular velocity about the vertical axis of the aircraft.\n 4. Angular velocity about the true vertical axis.',
      options: ['1, 2.', '1, 3.', '2, 3.', '3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_020',
      question: 'What factors affect the turn indicator?\n\n 1. AofA.\n 2. AOB.\n 3. TAS.\n 4. Weight.',
      options: ['1, 2.', '1, 3.', '2, 3.', '3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_021',
      question: 'What are the essential properties of a turn indicator?\n\n 1. Two degrees of freedom.\n 2. One degree of freedom.\n 3. Horizontal spin axis.\n 4. Vertical spin axis.\n 5. Longitudinal spin axis.',
      options: ['1, 2.', '2, 3.', '3, 4.', '2, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_022',
      question: 'What angle of bank would give a rate 1 turn at 120 Kts?',
      options: ['10 degrees.', '14 degrees.', '18 degrees.', '22 degrees.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_023',
      question: 'What does it indicate when the turn needle is out to the left and the ball out to the right?',
      options: ['Needle left and ball left.', 'Needle left and ball right.', 'Needle right and ball left.', 'Needle right and ball right.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_025',
      question: 'What will the turn needle indicate in a slightly banked turn?',
      options: ['Yaw rate.', 'Roll rate.', 'Pitch rate.', 'Angular velocity about the vertical axis.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_026',
      question: 'What corrective action is required if the ball is out to the right in a left turn?',
      options: ['More right ruder.', 'More left rudder.', 'More right bank.', 'More left bank.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_027',
      question: 'If both the ball and needle are out to the left in a turn, the ball can be centralized by?',
      options: ['Pushing the right rudder bar forward.', 'Increasing left bank.', 'Decreasing TAS.', 'Increasing TAS.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_028',
      question: 'How should the turn and slip indicator respond in a right turn when taxiing?',
      options: ['Needle left and ball left.', 'Needle left and ball right.', 'Needle right and ball right.', 'Needle right and ball left.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_029',
      question: 'For a coordinates rate 1 right turn at 250 Kts TAS, the correct AOB is approximately?',
      options: ['32 degrees.', '23 degrees.', '16 degrees.', '25 degrees.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_030',
      question: 'For a coordinated 300 Kts TAS rate 1 right turn the AOB should be?',
      options: ['17 degrees.', '27 degrees.', '37 degrees.', '47 degrees.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_031',
      question: 'For a coordinated rate 1 left turn at an AOB of 27 degrees, the TAS should be?',
      options: ['200 Kts.', '250 Kts.', '270 Kts.', '300 Kts.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_032',
      question: 'The gyro in a turn indicator must have …….. gimbal and ……. Degrees of freedom?',
      options: ['One one.', 'Two one.', 'Two two.', 'Three two.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_033',
      question: 'If the turn indicator needle is out to the right and the ball is out to the left, it indicates?',
      options: ['A left turn with too much bank.', 'A left turn with too little bank.', 'A right turn with too much bank.', 'A right turn with too little bank.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_034',
      question: 'What angle of bank is required to conduct a balanced rate 1 turn in an aircraft at 125 Kts TAS at a mass of\n55000 Kg?',
      options: ['15.5 degrees.', '17.5 degrees.', '19.5 degrees.', '21.5 degrees.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_035',
      question: 'If the mass of the aircraft in question 34 above, was decreased to 45000 Kg?',
      options: ['It would increase the required AOB.', 'It would decrease the required AOB.', 'It would not affect the required AOB, but less power would be required.', 'It would not affect the required AOB but more power would be required.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_036',
      question: 'The correct indications when taxiing to the left are?',
      options: ['Needle right, ball right.', 'Needle right, ball centre.', 'Needle left, ball left.', 'Needle left, ball right.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_037',
      question: 'If the turn and slip indicator shows needle left and ball left in a banked turn, the aircraft is ………… and the\nrequired corrective action is ……………?',
      options: ['Skidding push left pedal forward.', 'Skidding push right pedal forward.', 'Slipping push left pedal forward.', 'Slipping push right pedal forward.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_038',
      question: 'If the turn and slip indicator shows needle left and ball right in a banked turn, the aircraft is …….. and the\nrequired corrective action is ……..?',
      options: ['Skidding push left pedal forward.', 'Skidding push right pedal forward.', 'Slipping push left pedal forward.', 'Slipping push right pedal forward.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_039',
      question: 'If the turn and slip indicator shows needle right and ball right in a banked turn, the aircraft is ……… and the\nrequired corrective action is ………….?',
      options: ['Skidding push left pedal forward.', 'Skidding push right pedal forward.', 'Slipping push left pedal forward.', 'Slipping push right pedal forward.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins22_040',
      question: 'If the turn and slip indicator shows needle right and ball left in a banked turn, the aircraft is …….. and the\nrequired corrective action is …………?',
      options: ['Skidding push left pedal forward.', 'Skidding push right pedal forward.', 'Slipping push left pedal forward.', 'Slipping push right pedal forward. VSI'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins23: [
    {
      id: 'ins23_001',
      question: 'The alternate static source in a light non-pressurized aircraft is in the flight deck. As the alternate source is\nopened, the vertical airspeed indicator may:',
      options: ['Indicate a high rate of descent.', 'Indicate a slight momentary descent.', 'Indicate a slight momentary climb.', 'Be blocked.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins23_002',
      question: 'If the pitot pipe becomes partly blocked?',
      options: ['The VSI indication will be too low when climbing.', 'The VSI will be too low when descending.', 'The VSI will not be affected.', 'The VSI will be too low when descending and too high when climbing.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins23_003',
      question: 'If the static pipe becomes partly blocked?',
      options: ['The VSI indication will be too high when descending.', 'The VSI indication will be too high when accelerating.', 'The VSI indication will be too low when climbing or descending.', 'The VSI indication will be unaffected.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins23_004',
      question: 'VSI lag is reduced by?',
      options: ['Two dashpots responding to acceleration.', 'Two return springs.', 'Bi-metallic strips.', 'Electronic systems.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins23_005',
      question: 'If the choke in the VSI becomes partly blocked?',
      options: ['The VSI indication will be too high when climbing.', 'The VSI indication will be too low when descending.', 'The VSI indication will be too high at all times.', 'The VSI indication will be too high when climbing or descending.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins23_006',
      question: 'The correct action to be taken when the static vent blocks on an unpressurised aircraft is to?',
      options: ['Break the VSI glass.', 'Use the standby static source.', 'Calculate ROC using mathematically.', 'Open a window to equalize pressures.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins23_007',
      question: 'If the casing of a VSIs in a pressurized aircraft develops a leak?',
      options: ['VSI indications will be too low when climbing or descending.', 'VSI indications will be too high when climbing or descending.', 'VSI indications will be too low when climbing and too high when descending.', 'VSI indications will be too high when climbing and too low when descending.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins23_008',
      question: 'A VSI?',
      options: ['Produces an output proportional to ambient pressure.', 'Measures the difference between total pressure and static pressure.', 'Measures the different between the pressure inside and outside a capsule.', 'Measures only dynamic pressure.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins23_009',
      question: 'A VSI indicates increasing ROD by?',
      options: ['VSI needle moving downwards.', 'VSI needle moving upwards.', 'VSI needle stationary.', 'The VSI indicates only vertical speeds, not accelerations.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins23_010',
      question: 'As an aircraft moves close to the ground during a landing the VSI might?',
      options: ['Become inaccurate due to ground effect.', 'Become inaccurate due to turbulence.', 'Stick due to loss of pitot source.', 'Become inaccurate due to aircraft attitude changes.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins23_011',
      question: 'What should the VSI indicate when an aircraft on a 3 degree glideslope if flying at 100 Kts TAS?',
      options: ['224 fpm descent.', '324 fpm descent.', '424 fpm descent.', '542 fpm descent.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins23_012',
      question: 'If the static pipe becomes partly blocked?',
      options: ['The VSI indication will be too high when descending.', 'The VSI indication will be too high when accelerating at constant altitudes.', 'The VSI indication will be too low at all times.', 'The VSI indication will be too low when descending.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins23_013',
      question: 'If the pitot pipe becomes partly blocked?',
      options: ['The VSI will over read when climbing or descending.', 'The VSI will be unaffected.', 'The VSI will over under read at all times.', 'The VSI will read zero at all times.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins23_014',
      question: 'The response rate of a VSI can be improved by fitting a?',
      options: ['Accelerometer system.', 'Choke system.', 'Bi-metalic compensator.', 'Return spring.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins23_015',
      question: 'If the port static vent of a large aircraft is blocked, what will happen to the VSI indications when it is side\nslipping to the left in a descent?',
      options: ['Over indicate.', 'Under indicate.', 'Be unaffected.', 'Fluctuate. WARN/REC'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
  ins24: [
    {
      id: 'ins24_001',
      question: 'The main inputs to the flight envelope protection system are :\n\n 1. GPWS signals.\n 2. ACARS signals.\n 3. Angle of attack.\n 4. Bank angle.\n\nThe combination regrouping all of the correct statements is :',
      options: ['3, 4.', '1, 2.', '1, 2, 3.', '1, 2, 3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_002',
      question: 'The flight envelope protection function consists of :\n\n 1. Alerting the flight crew in case of dangerous proximity with the ground.\n 2. Avoiding midair collisions.\n 3. Preventing the aircraft from exceeding some aerodynamic limits.\n\nThe combination regrouping all of the correct statement is.',
      options: ['1, 2, 3.', '3.', '1, 3.', '1.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_003',
      question: 'Which of these statements about the activation of the take-off warning when a take-off is initiated are correct\nand incorrect :\n\n 1. An aural warning is given if the elevator is not in a safe position at take -off.\n 2. An aural warning is given when the brake pressure is too low.',
      options: ['1 is correct 2 is correct.', '1 is correct 2 is incorrect.', '1 is incorrect 2 is correct.', '1 is incorrect 2 is incorrect.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_004',
      question: 'The flight envelope protection functions consist in :\n\n 1. Automatically performing an evasion manoeuvre if necessary.\n 2. Prevents the aircraft from exceeding the limits for specific flight parameters.\n 3. Alerting the flight crew in case of dangerous proximity with threatening traffic.\n 4. Preventing any incursion beyond ATC clearance.\n\nThe combination regrouping all of the correct statements is :',
      options: ['2.', '1, 3.', '1, 2.', '2, 3. 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_005',
      question: 'For compatibility between the different components of a flight warning system, the priority from the highest to\nthe lowest is :',
      options: ['Stall, TCAS, windshear, GPWS.', 'GPWS, stall, TCAS, windshear.', 'Stall, windshear, GPWS, TCAS.', 'TCAS, stall, windshear, GPWS.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_006',
      question: 'The stall warning system of a large aeroplane includes :\n\n 1. An angle of attack indicator.\n 2. A computer.\n 3. An independent pitot probe.\n 4. A transmitter of the flap/salt position indicating system.\n\nThe combination regrouping all of the correct statements is :',
      options: ['1, 2, 3.', '1, 3.', '2, 4.', '2, 4. e. 1, 2, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_007',
      question: 'The stall warning computer of a large aeroplane uses the following data :\n\n 1. Pitch attitude.\n 2. Angle of attack.\n 3. Configuration (slats/flaps).\n\nThe combination regrouping all of the correct statements is :',
      options: ['2, 3.', '1 , 2, 3.', '1, 3.', '1, 2.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_008',
      question: 'Which of these statements about the activation of the take-off warning when a take-off is initiated are correct\nand incorrect :\n\n 1. An aural warning is given if the stabilizer is not in a safe position at take – off.\n 2. An aural warning is given when the brake pressure is too low.',
      options: ['1 is incorrect 2 is correct.', '1 is correct 2 is incorrect.', '1 is correct 2 is correct.', '1 is incorrect 2 is incorrect.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_009',
      question: 'Which of these statements about the activation of the take- off warning when a take-off is initiated are correct\nand incorrect :\n\n 1. An aural warning is given if the elevator is not in a safe position at take – off.\n 2. An aural warning is given when the parking brake is still on .',
      options: ['1 is incorrect 2 is incorrect.', '1 is correct 2 is incorrect.', '1 is incorrect 2 is correct.', '1 is correct 2 is correct.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_010',
      question: 'On a large aeroplane and in accordance with CS25, when the speed is reduced, the stall warning must begin:',
      options: ['At a speed exceeding the stall speed by not less than 10 knots or 10% CAS.', 'Exactly at the stall speed.', 'At the stall speed +/- 5%.', 'At a speed exceeding the stall speed by not less than 5 knots or 5% CAS.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_011',
      question: 'On a large aeroplane and according to the CS25: The stall warning system must provide an alarm with sufficient\nmargin to prevent inadvertent stalling :',
      options: ['With the flaps and gear up only.', 'With the flaps fully extended and gear down only.', 'With flaps not retracted only, whatever the position of the landing gear.', 'With the flaps and landing gear in any normal position.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_012',
      question: 'The stall warning in inhibited :\n\n 1. When the flaps are retracted.\n 2. When the aeroplane is one the ground.\n 3. When encountering a windshear.\n 4. Upon receiving a GPWS alert.\n\nThe combination regrouping all of the correct statements is :',
      options: ['2, 3.', '1, 2.', '2, 4.', '2.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_013',
      question: 'The flight envelope protection system prevents the aircraft from exceeding the limits of the following\nparameters :\n\n 1. N1.\n 2. Angle of attack.\n 3. Speed.\n 4. Pitch attitude.\n 5. Flight level.\n\nThe combination regrouping all of the correct statements is :',
      options: ['2, 3, 4.', '2.', '1, 2, 3, 4, 5.', '2, 3, 4, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_014',
      question: 'On a large aeroplane and in accordance with CS25, the regulatory margin between the stall and the stall warning\nis :',
      options: ['5 knots of 5% of the CAS whichever is the greater.', '5 knots of 5% of the CAS whichever is the lower.', 'VSO + 5 knots.', 'VSO + 5%'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_015',
      question: 'The flight envelope protection system prevents the aircraft from exceeding the limits (among others) :\n\n 1. Cabin altitude.\n 2. Bank angle.\n 3. Angle of attack.\n 4. Speed.\n 5. Pitch attitude.\n\nThe combination regrouping all of the correct statements is :',
      options: ['2, 5.', '1, 2, 3, 4, 5.', '2, 3, 4, 5.', '1, 2, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_016',
      question: 'The FDR in a JAR certificated aircraft must be located in ?',
      options: ['The front.', 'The back', 'The undercarriage bay.', 'The outer wings.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_017',
      question: 'In an aircraft certificated under JAR since 1 April 1998 the CVR must record for?',
      options: ['30 minutes.', '2 hours.', '8 hours.', '72 hours.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_018',
      question: 'A basic stall warning system monitors?',
      options: ['A of A.', 'CAS.', 'Mach number.', 'Slat and flap position.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_019',
      question: 'In an aircraft of more than 5700 Kg mass certificated under JAR after April 1998, the FDR must record for?',
      options: ['30 minutes.', '60 minutes.', '10 hours.', '25 hours.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_020',
      question: 'A CVR records?',
      options: ['Radio conversations.', 'Cabin crew conversations.', 'Crew conversations on intercom.', 'Public address announcements and cockpit discussions.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_021',
      question: 'A stall warning system in a large JAR certificated aircraft must include?',
      options: ['Stick shaker and stick pusher.', 'Monitoring of speed brake position and angle of attack, a warning module, and visual or aural warning system.', 'Monitoring of landing gear squat switch and A of A, a warning module and an aural warning.', 'Monitoring of A of A and TAS, plus aural and visual warnings.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_022',
      question: 'An altitude warning system?',
      options: ['Automatically disengages autotrim at 500 ft.', 'Automatically engages autotrim at 500 ft.', 'Provides visual alerts when approaching a selected altitude.', 'Activates a warning light and bell when approaching a selected altitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_023',
      question: 'A combined FDR and CVR records?\n\n 1. Cockpit voice discussions.\n 2. Cabin voice discussions.\n 3. Radio discussions.\n 4. All Public address messages from the cockpit.',
      options: ['1, 2, 3.', '1, 2, 4.', '2, 3, 4.', '1, 3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_024',
      question: 'An altitude alert system?',
      options: ['Alerts the pilot if the aircraft deviates from selected altitude.', 'Alerts the pilot when decision height is reached.', 'Alerts the pilot when the selected height is reached.', 'Alerts the pilot when the actual altitude is equal to the reference altitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_025',
      question: 'The FDR starts recording when?',
      options: ['Before the aircraft starts to move under its own power.', 'When the brakes are released.', 'When the landing gear squat switch detects lift-off.', 'When the undercarriage retract button is pressed.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_026',
      question: 'For certification of a heavy aircraft after 1 April 1998 the FDR and CVR must record for ….. and…….\nRespectively.',
      options: ['10 hours 1 hour.', '10 hours 2 hours.', '25 hours 1 hour.', '25 hours 2 hours.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_027',
      question: 'JAR OPS require a CVR to start and stop recording?',
      options: ['From when the aircraft is first able to move under its own power to the time of engine shut down.', 'From when the aircraft is first able to move under its own power to the time at which it is next unable to do so.', 'From engine start up to engine shut down.', 'From when the APU or first engine is started to when the APU or last engine is shut down.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_028',
      question: 'A CVR system includes?\n\n 1. Microphones.\n 2. FDR.\n 3. Independent battery power supply.\n 4. Crash and fire resistant construction.',
      options: ['1, 4.', '1, 3.', '2, 3.', '3, 4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_029',
      question: 'A JAR certificated altitude alerting system must be capable of warning of at least?\n\n 1. Deviation from selected altitude.\n 2. Approaching selected altitude.\n 3. Excessive vertical speed.\n 4. Excessive terrain closure rate.\n 5. Abnormal flap and landing gear configuration for current height.',
      options: ['1, 2.', '2, 3.', '1, 2, 3, 4, 5.', '2, 3, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_030',
      question: 'JAR OPS requires a 50 seat turbo-prop aircraft CVR to record.',
      options: ['From battery master switch on to off.', 'From BRP to touch-down.', 'Whenever the aircraft is able to move under its own paper.', 'Before starting to taxi to when the parking brake is applied.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_031',
      question: 'A FDR must be fitted?',
      options: ['At the front of an aircraft.', 'At the back of an aircraft.', 'In the cockpit.', 'Close to the engines.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_032',
      question: 'The altitude alerting system?',
      options: ['Alerts pilot upon reaching selected altitude.', 'Alerts pilot when approaching selected altitude.', 'Alerts pilot at decision height.', 'Alerts pilot of all changes in altitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_033',
      question: 'A JAR certificated CVR must record?\n\n 1. All voice communications within the aircraft.\n 2. All crew voice communications within the aircraft.\n 3. All PA announcements.\n 4. All discussions between crew and ATC.\n 5. All signals from navigation aids.',
      options: ['5.', '1, 3.', '3, 5.', '4.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_034',
      question: 'What level of voice recording is required in multi-turbine engine aircraft with 9 or more passenger seats,\ncertificated after January 1998?\n\n 1. Flight deck crew calls on intercom.\n 2. Flight deck crew calls on public address.\n 3. Internal cockpit communications.\n 4. External cockpit communications.\n 5. Cockpit environmental noises.',
      options: ['1, 2, 3.', '2, 3, 4.', '3, 4, 5.', 'All of the above.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_035',
      question: 'In the altitude alerting system what lights indicate a deviation of more than 300 ft from selected altitude?',
      options: ['Steady amber.', 'Flashing amber.', 'Steady red.', 'Flashing red.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_036',
      question: 'The inputs to a modern jet aircraft stall warning system include?\n\n 1. Alpha.\n 2. Configuration.\n 3. Engine RPM.\n 4. Pitch attitude.\n 5. AOB.',
      options: ['1, 2.', '2, 3, 4.', '3, 4, 5.', 'All of the above.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_037',
      question: 'The components of a modern jet aircraft stall warning system include?\n\n 1. Angle of attack sensors.\n 2. Bank rate sensors.\n 3. Control surface position sensors.\n 4. Stick shaker.\n 5. Gear and flap sensors.',
      options: ['1, 2, 3.', '2, 3, 4.', '1, 3, 5.', 'All of the above.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_038',
      question: 'The CVR in a 50 seat turbo-prop aircraft must record?',
      options: ['From switching on to switching off electrical power.', 'From commencing pre take-off taxi to turning of the runway after landing.', 'From lift-off to touch-down.', 'From first being able to move under its own power to next becoming unable to do so.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_039',
      question: 'An altitude alerting system is required to alert the crew of at least the following?\n\n 1. Abnormal flap and gear configurations.\n 2. Excessive closure with terrain.\n 3. Excessive vertical speed.\n 4. Excessive deviation from selected altitude.\n 5. Approaching selected altitude.',
      options: ['1, 2.', '3, 4.', '3, 4.', '4, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_040',
      question: 'The flight deck FDR and CVR must be capable of recording for at least?',
      options: ['15 hrs. 60 mins.', '24 hrs, 60 mins.', '25 hrs, 30 mins.', '48 hrs, 45 mins.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_041',
      question: 'The FDR must start running when?',
      options: ['Before the aircraft starts moving under its own power.', 'When lined up for take-off.', 'At brake release for take-off.', 'When the gear up button is pushed.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_042',
      question: 'A basic stall warning system in a light aircraft senses?',
      options: ['MNO.', 'IAS.', 'Slat and flap positions.', 'Alpha.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_043',
      question: 'The FDR in an aircraft of mass exceeding 5700 Kgs, certificated after April 1998 must be capable of recording\nfor at least?',
      options: ['30 minutes.', '60 minutes.', '24 hours.', '25 hours.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_044',
      question: 'JAR OPS requires that the FDR must be located at?',
      options: ['The front of an aircraft.', 'The back of an aircraft.', 'The top of an aircraft.', 'The bottom of an aircraft.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_045',
      question: 'The function of the altitude alert system is to?',
      options: ['Upon sensing an unacceptable situation, it is to engage autopilot and fly the aircraft into a safe condition.', 'Engage auto-trim when the aircraft reaches its selected altitude.', 'Disengage auto-trim when reaching selected altitude.', 'Illuminate a warning light as the aircraft approaches the selected altitude.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_046',
      question: 'A cockpit voice recorder must be capable of recording?\n\n 1. Flight deck and cabin crew intercom discussions.\n 2. Radio discussions.\n 3. Public address system announcements.\n 4. Flight deck noise environment.\n 5. Navigation aid indents.',
      options: ['1, 2, 3, 4.', '2, 3, 4, 5.', '1, 2, 4, 5.', '1, 3, 4, 5.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
    {
      id: 'ins24_047',
      question: 'A flight data recorder is required in …….. aircraft weighing more than 5700 Kg?\n\n 1. Turbojets.\n 2. Turboprops.\n 3. Pistonprops.',
      options: ['1, 2.', '2, 3.', '3, 4.', 'All of the above.'],
      correct: null, // TODO: fill in correct answer index
      explanation: '', // TODO: fill in explanation
    },
  ],
}