import React, { Component } from "react";
import axios from "axios";
//import Papa from '.\node_modules\PapaParse\papaparse';
import * as Papa from "papaparse";

import { API_URL } from "../constants";

class ImportCSV extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null,
      loaded: 0,
    };
  }
  //const endpoint = 'http://localhost:8000/api/upload'

  //fixes the rib location since they're only denoted with a 1 in the .csv
  // function rib_position(value, columnNumber) {
  //   if (columnNumber > 22 && columnNumber % 4 === 3 && value === 1) {
  //     //is the rib on the left or right
  //     if (columnNumber < 215) {
  //       value = "l";
  //     } else {
  //       value = "r";
  //     }

  //     //which of the 4 sections of the rib is it
  //     if (columnNumber % 16 === 7) {
  //       value = value.concat(".p");
  //     } else if (columnNumber % 16 === 11) {
  //       value = value.concat(".pl");
  //     } else if (columnNumber % 16 === 15) {
  //       value = value.concat(".al");
  //     } else {
  //       value = value.concat(".a");
  //     }

  //     //what is the rib number?
  //     if (
  //       (columnNumber > 22 && columnNumber < 38) ||
  //       (columnNumber > 214 && columnNumber < 230)
  //     ) {
  //       value = value.concat(".rib.1");
  //     } else if (
  //       (columnNumber > 38 && columnNumber < 54) ||
  //       (columnNumber > 230 && columnNumber < 246)
  //     ) {
  //       value = value.concat(".rib.2");
  //     } else if (
  //       (columnNumber > 54 && columnNumber < 70) ||
  //       (columnNumber > 246 && columnNumber < 262)
  //     ) {
  //       value = value.concat(".rib.3");
  //     } else if (
  //       (columnNumber > 70 && columnNumber < 86) ||
  //       (columnNumber > 262 && columnNumber < 278)
  //     ) {
  //       value = value.concat(".rib.4");
  //     } else if (
  //       (columnNumber > 86 && columnNumber < 102) ||
  //       (columnNumber > 278 && columnNumber < 294)
  //     ) {
  //       value = value.concat(".rib.5");
  //     } else if (
  //       (columnNumber > 102 && columnNumber < 118) ||
  //       (columnNumber > 294 && columnNumber < 310)
  //     ) {
  //       value = value.concat(".rib.6");
  //     } else if (
  //       (columnNumber > 118 && columnNumber < 134) ||
  //       (columnNumber > 310 && columnNumber < 326)
  //     ) {
  //       value = value.concat(".rib.7");
  //     } else if (
  //       (columnNumber > 134 && columnNumber < 150) ||
  //       (columnNumber > 326 && columnNumber < 342)
  //     ) {
  //       value = value.concat(".rib.8");
  //     } else if (
  //       (columnNumber > 150 && columnNumber < 166) ||
  //       (columnNumber > 342 && columnNumber < 358)
  //     ) {
  //       value = value.concat(".rib.9");
  //     } else if (
  //       (columnNumber > 166 && columnNumber < 182) ||
  //       (columnNumber > 358 && columnNumber < 374)
  //     ) {
  //       value = value.concat(".rib.10");
  //     } else if (
  //       (columnNumber > 182 && columnNumber < 198) ||
  //       (columnNumber > 374 && columnNumber < 390)
  //     ) {
  //       value = value.concat(".rib.11");
  //     } else if (
  //       (columnNumber > 198 && columnNumber < 214) ||
  //       (columnNumber > 390 && columnNumber < 406)
  //     ) {
  //       value = value.concat(".rib.12");
  //     }
  //   }
  //   return value;
  // }

  handleselectedFile = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  };
  handleUpload = () => {
    if (this.state.selectedFile == null) {
      alert("You must select a file to upload.");
      return false;
    }
    if (!this.state.selectedFile.name.endsWith(".csv")) {
      alert("You can only upload .csv flies.");
      return false;
    }

    Papa.parse(this.state.selectedFile, {
      //header: true,
      // transform: rib_position,
      dynamicTyping: true,
      skipEmptyLines: true,
      step: function (row) {
        //axios.post(API_URL, row.data);
        //console.log("Row:", row.data);

        //ignore the header row
        if (row.data[1] === "age" || row.data[1] === "Age") {
        }
        //take each parsed row and submit as a new patient
        else {
          var new_entry = {
            pk: 0,
            case_id: row.data[0],
            age: row.data[1] ? row.data[1] : "",
            sex: row.data[2] ? row.data[2] : "",
            weight: row.data[3] ? row.data[3] : "",
            height: row.data[4] ? row.data[4] : "",
            ancestry: row.data[5] ? row.data[5] : "",
            mod: row.data[6] ? row.data[6] : "",
            cod: row.data[7] ? row.data[7] : "",
            cod_type: row.data[8] ? row.data[8] : "",
            xray: row.data[9] ? row.data[9] : "",
            cpr: row.data[10] ? row.data[10] : "",
            belted: row.data[11] ? row.data[11] : "",
            obese: row.data[12] ? row.data[12] : "",
            cardio: row.data[13] ? row.data[13] : "",
            patho: row.data[14] ? row.data[14] : "",
            tobacco: row.data[15] ? row.data[15] : "",
            marijuana: row.data[16] ? row.data[16] : "",
            alcohol: row.data[17] ? row.data[17] : "",
            prescription: row.data[18] ? row.data[18] : "",
            drug_use: row.data[19] ? row.data[19] : "",
            health_notes: row.data[20] ? row.data[20] : "",
            sternum: row.data[21],
            cpr_sternum: row.data[22] ? row.data[22] : "",
            lprib1: row.data[23],
            com_lprib1: row.data[24],
            type_lprib1: row.data[25] ? row.data[25] : "",
            cpr_lprib1: row.data[26] ? row.data[26] : "",
            lplrib1: row.data[27],
            com_lplrib1: row.data[28],
            type_lplrib1: row.data[29] ? row.data[29] : "",
            cpr_lplrib1: row.data[30] ? row.data[30] : "",
            lalrib1: row.data[31],
            com_lalrib1: row.data[32],
            type_lalrib1: row.data[33] ? row.data[33] : "",
            cpr_lalrib1: row.data[34] ? row.data[34] : "",
            lprib2: row.data[35],
            com_lprib2: row.data[36],
            type_lprib2: row.data[37] ? row.data[37] : "",
            cpr_lprib2: row.data[38] ? row.data[38] : "",
            lplrib2: row.data[39],
            com_lplrib2: row.data[40],
            type_lplrib2: row.data[41] ? row.data[41] : "",
            cpr_lplrib2: row.data[42] ? row.data[42] : "",
            lalrib1: row.data[43],
            com_lalrib2: row.data[44],
            type_lalrib2: row.data[45] ? row.data[45] : "",
            cpr_lalrib2: row.data[46] ? row.data[46] : "",
            larib2: row.data[47],
            com_larib2: row.data[48],
            type_larib2: row.data[49] ? row.data[49] : "",
            cpr_larib2: row.data[50] ? row.data[50] : "",
            lprib3: row.data[51],
            com_lprib3: row.data[52],
            type_lprib3: row.data[53] ? row.data[53] : "",
            cpr_lprib3: row.data[54] ? row.data[54] : "",
            lplrib3: row.data[55],
            com_lplrib3: row.data[56],
            type_lplrib3: row.data[57] ? row.data[57] : "",
            cpr_lplrib3: row.data[58] ? row.data[58] : "",
            lalrib3: row.data[59],
            com_lalrib3: row.data[60],
            type_lalrib3: row.data[61] ? row.data[61] : "",
            cpr_lalrib3: row.data[62] ? row.data[62] : "",
            larib3: row.data[63],
            com_larib3: row.data[64],
            type_larib3: row.data[65] ? row.data[65] : "",
            cpr_larib3: row.data[66] ? row.data[66] : "",
            lprib4: row.data[67],
            com_lprib4: row.data[68],
            type_lprib4: row.data[69] ? row.data[69] : "",
            cpr_lprib4: row.data[70] ? row.data[70] : "",
            lplrib4: row.data[71],
            com_lplrib4: row.data[72],
            type_lplrib4: row.data[73] ? row.data[73] : "",
            cpr_lplrib4: row.data[74] ? row.data[74] : "",
            lalrib4: row.data[75],
            com_lalrib4: row.data[76],
            type_lalrib4: row.data[77] ? row.data[77] : "",
            cpr_lalrib4: row.data[78] ? row.data[78] : "",
            larib4: row.data[79],
            com_larib4: row.data[80],
            type_larib4: row.data[81] ? row.data[81] : "",
            cpr_larib4: row.data[82] ? row.data[82] : "",
            lprib5: row.data[83],
            com_lprib5: row.data[84],
            type_lprib5: row.data[85] ? row.data[85] : "",
            cpr_lprib5: row.data[86] ? row.data[86] : "",
            lplrib5: row.data[87],
            com_lplrib5: row.data[88],
            type_lplrib5: row.data[89] ? row.data[89] : "",
            cpr_lplrib5: row.data[90] ? row.data[90] : "",
            lalrib5: row.data[91],
            com_lalrib5: row.data[92],
            type_lalrib5: row.data[93] ? row.data[93] : "",
            cpr_lalrib5: row.data[94] ? row.data[94] : "",
            larib5: row.data[95],
            com_larib5: row.data[96],
            type_larib5: row.data[97] ? row.data[97] : "",
            cpr_larib5: row.data[98] ? row.data[98] : "",
            lprib6: row.data[99],
            com_lprib6: row.data[100],
            type_lprib6: row.data[101] ? row.data[101] : "",
            cpr_lprib6: row.data[102] ? row.data[102] : "",
            lplrib6: row.data[103],
            com_lplrib6: row.data[104],
            type_lplrib6: row.data[105] ? row.data[105] : "",
            cpr_lplrib6: row.data[106] ? row.data[106] : "",
            lalrib6: row.data[107],
            com_lalrib6: row.data[108],
            type_lalrib6: row.data[109] ? row.data[109] : "",
            cpr_lalrib6: row.data[110] ? row.data[110] : "",
            larib6: row.data[111],
            com_larib6: row.data[112],
            type_larib6: row.data[113] ? row.data[113] : "",
            cpr_larib6: row.data[114] ? row.data[114] : "",
            lprib7: row.data[115],
            com_lprib7: row.data[116],
            type_lprib7: row.data[117] ? row.data[117] : "",
            cpr_lprib7: row.data[118] ? row.data[118] : "",
            lplrib7: row.data[119],
            com_lplrib7: row.data[120],
            type_lplrib7: row.data[121] ? row.data[121] : "",
            cpr_lplrib7: row.data[122] ? row.data[122] : "",
            lalrib7: row.data[123],
            com_lalrib7: row.data[124],
            type_lalrib7: row.data[125] ? row.data[125] : "",
            cpr_lalrib7: row.data[126] ? row.data[126] : "",
            larib7: row.data[127],
            com_larib7: row.data[128],
            type_larib7: row.data[129] ? row.data[129] : "",
            cpr_larib7: row.data[130] ? row.data[130] : "",
            lprib8: row.data[131],
            com_lprib8: row.data[132],
            type_lprib8: row.data[133] ? row.data[133] : "",
            cpr_lprib8: row.data[134] ? row.data[134] : "",
            lplrib8: row.data[135],
            com_lplrib8: row.data[136],
            type_lplrib8: row.data[137] ? row.data[137] : "",
            cpr_lplrib8: row.data[138] ? row.data[138] : "",
            lalrib8: row.data[139],
            com_lalrib8: row.data[140],
            type_lalrib8: row.data[141] ? row.data[141] : "",
            cpr_lalrib8: row.data[142] ? row.data[142] : "",
            larib8: row.data[143],
            com_larib8: row.data[144],
            type_larib8: row.data[145] ? row.data[145] : "",
            cpr_larib8: row.data[146] ? row.data[146] : "",
            lprib9: row.data[147],
            com_lprib9: row.data[148],
            type_lprib9: row.data[149] ? row.data[149] : "",
            cpr_lprib9: row.data[150] ? row.data[150] : "",
            lplrib9: row.data[151],
            com_lplrib9: row.data[152],
            type_lplrib9: row.data[153] ? row.data[153] : "",
            cpr_lplrib9: row.data[154] ? row.data[154] : "",
            lalrib9: row.data[155],
            com_lalrib9: row.data[156],
            type_lalrib9: row.data[157] ? row.data[157] : "",
            cpr_lalrib9: row.data[158] ? row.data[158] : "",
            larib9: row.data[159],
            com_larib9: row.data[160],
            type_larib9: row.data[161] ? row.data[161] : "",
            cpr_larib9: row.data[162] ? row.data[162] : "",
            lprib10: row.data[163],
            com_lprib10: row.data[164],
            type_lprib10: row.data[165] ? row.data[165] : "",
            cpr_lprib10: row.data[166] ? row.data[166] : "",
            lplrib10: row.data[167],
            com_lplrib10: row.data[168],
            type_lplrib10: row.data[169] ? row.data[169] : "",
            cpr_lplrib10: row.data[170] ? row.data[170] : "",
            lalrib10: row.data[171],
            com_lalrib10: row.data[172],
            type_lalrib10: row.data[173] ? row.data[173] : "",
            cpr_lalrib10: row.data[174] ? row.data[174] : "",
            larib10: row.data[175],
            com_larib10: row.data[176],
            type_larib10: row.data[177] ? row.data[177] : "",
            cpr_larib10: row.data[178] ? row.data[178] : "",
            lprib11: row.data[179],
            com_lprib11: row.data[180],
            type_lprib11: row.data[181] ? row.data[181] : "",
            cpr_lprib11: row.data[182] ? row.data[182] : "",
            lplrib11: row.data[183],
            com_lplrib11: row.data[184],
            type_lplrib11: row.data[185] ? row.data[185] : "",
            cpr_lplrib11: row.data[186] ? row.data[186] : "",
            lalrib11: row.data[187],
            com_lalrib11: row.data[188],
            type_lalrib11: row.data[189] ? row.data[189] : "",
            cpr_lalrib11: row.data[190] ? row.data[190] : "",
            lprib12: row.data[191],
            com_lprib12: row.data[192],
            type_lprib12: row.data[193] ? row.data[193] : "",
            cpr_lprib12: row.data[194] ? row.data[194] : "",
            lplrib12: row.data[195],
            com_lplrib12: row.data[196],
            type_lplrib12: row.data[197] ? row.data[197] : "",
            cpr_lplrib12: row.data[198] ? row.data[198] : "",
            lalrib12: row.data[199],
            com_lalrib12: row.data[200],
            type_lalrib12: row.data[201] ? row.data[201] : "",
            cpr_lalrib12: row.data[202] ? row.data[202] : "",
            rprib1: row.data[203],
            com_rprib1: row.data[204],
            type_rprib1: row.data[205] ? row.data[205] : "",
            cpr_rprib1: row.data[206] ? row.data[206] : "",
            rplrib1: row.data[207],
            com_rplrib1: row.data[208],
            type_rplrib1: row.data[209] ? row.data[209] : "",
            cpr_rplrib1: row.data[210] ? row.data[210] : "",
            ralrib1: row.data[211],
            com_ralrib1: row.data[212],
            type_ralrib1: row.data[213] ? row.data[213] : "",
            cpr_ralrib1: row.data[214] ? row.data[214] : "",
            rprib2: row.data[215],
            com_rprib2: row.data[216],
            type_rprib2: row.data[217] ? row.data[217] : "",
            cpr_rprib2: row.data[218] ? row.data[218] : "",
            rplrib2: row.data[219],
            com_rplrib2: row.data[220],
            type_rplrib2: row.data[221] ? row.data[221] : "",
            cpr_rplrib2: row.data[222] ? row.data[222] : "",
            ralrib2: row.data[223],
            com_ralrib2: row.data[224],
            type_ralrib2: row.data[225] ? row.data[225] : "",
            cpr_ralrib2: row.data[226] ? row.data[226] : "",
            rarib2: row.data[227],
            com_rarib2: row.data[228],
            type_rarib2: row.data[229] ? row.data[229] : "",
            cpr_rarib2: row.data[230] ? row.data[230] : "",
            rprib3: row.data[231],
            com_rprib3: row.data[232],
            type_rprib3: row.data[233] ? row.data[233] : "",
            cpr_rprib3: row.data[234] ? row.data[234] : "",
            rplrib3: row.data[235],
            com_rplrib3: row.data[236],
            type_rplrib3: row.data[237] ? row.data[237] : "",
            cpr_rplrib3: row.data[238] ? row.data[238] : "",
            ralrib3: row.data[239],
            com_ralrib3: row.data[240],
            type_ralrib3: row.data[241] ? row.data[241] : "",
            cpr_ralrib3: row.data[242] ? row.data[242] : "",
            rarib3: row.data[243],
            com_rarib3: row.data[244],
            type_rarib3: row.data[245] ? row.data[245] : "",
            cpr_rarib3: row.data[246] ? row.data[246] : "",
            rprib4: row.data[247],
            com_rprib4: row.data[248],
            type_rprib4: row.data[249] ? row.data[249] : "",
            cpr_rprib4: row.data[250] ? row.data[250] : "",
            rplrib4: row.data[251],
            com_rplrib4: row.data[252],
            type_rplrib4: row.data[253] ? row.data[253] : "",
            cpr_rplrib4: row.data[254] ? row.data[254] : "",
            ralrib4: row.data[255],
            com_ralrib4: row.data[256],
            type_ralrib4: row.data[257] ? row.data[257] : "",
            cpr_ralrib4: row.data[258] ? row.data[258] : "",
            rarib4: row.data[259],
            com_rarib4: row.data[260],
            type_rarib4: row.data[261] ? row.data[261] : "",
            cpr_rarib4: row.data[262] ? row.data[262] : "",
            rprib5: row.data[263],
            com_rprib5: row.data[264],
            type_rprib5: row.data[265] ? row.data[265] : "",
            cpr_rprib5: row.data[266] ? row.data[266] : "",
            rplrib5: row.data[267],
            com_rplrib5: row.data[268],
            type_rplrib5: row.data[269] ? row.data[269] : "",
            cpr_rplrib5: row.data[270] ? row.data[270] : "",
            ralrib5: row.data[271],
            com_ralrib5: row.data[272],
            type_ralrib5: row.data[273] ? row.data[273] : "",
            cpr_ralrib5: row.data[274] ? row.data[274] : "",
            rarib5: row.data[275],
            com_rarib5: row.data[276],
            type_rarib5: row.data[277] ? row.data[277] : "",
            cpr_rarib5: row.data[278] ? row.data[278] : "",
            rprib6: row.data[279],
            com_rprib6: row.data[280],
            type_rprib6: row.data[281] ? row.data[281] : "",
            cpr_rprib6: row.data[282] ? row.data[282] : "",
            rplrib6: row.data[283],
            com_rplrib6: row.data[284],
            type_rplrib6: row.data[285] ? row.data[285] : "",
            cpr_rplrib6: row.data[286] ? row.data[286] : "",
            ralrib6: row.data[287],
            com_ralrib6: row.data[288],
            type_ralrib6: row.data[289] ? row.data[289] : "",
            cpr_ralrib6: row.data[290] ? row.data[290] : "",
            rarib6: row.data[291],
            com_rarib6: row.data[292],
            type_rarib6: row.data[293] ? row.data[293] : "",
            cpr_rarib6: row.data[294] ? row.data[294] : "",
            rprib7: row.data[295],
            com_rprib7: row.data[296],
            type_rprib7: row.data[297] ? row.data[297] : "",
            cpr_rprib7: row.data[298] ? row.data[298] : "",
            rplrib7: row.data[299],
            com_rplrib7: row.data[300],
            type_rplrib7: row.data[301] ? row.data[301] : "",
            cpr_rplrib7: row.data[302] ? row.data[302] : "",
            ralrib7: row.data[303],
            com_ralrib7: row.data[304],
            type_ralrib7: row.data[305] ? row.data[305] : "",
            cpr_ralrib7: row.data[306] ? row.data[306] : "",
            rarib7: row.data[307],
            com_rarib7: row.data[308],
            type_rarib7: row.data[309] ? row.data[309] : "",
            cpr_rarib7: row.data[310] ? row.data[310] : "",
            rprib8: row.data[311],
            com_rprib8: row.data[312],
            type_rprib8: row.data[313] ? row.data[313] : "",
            cpr_rprib8: row.data[314] ? row.data[314] : "",
            rplrib8: row.data[315],
            com_rplrib8: row.data[316],
            type_rplrib8: row.data[317] ? row.data[317] : "",
            cpr_rplrib8: row.data[318] ? row.data[318] : "",
            ralrib8: row.data[319],
            com_ralrib8: row.data[320],
            type_ralrib8: row.data[321] ? row.data[321] : "",
            cpr_ralrib8: row.data[322] ? row.data[322] : "",
            rarib8: row.data[323],
            com_rarib8: row.data[324],
            type_rarib8: row.data[325] ? row.data[325] : "",
            cpr_rarib8: row.data[326] ? row.data[326] : "",
            rprib9: row.data[327],
            com_rprib9: row.data[328],
            type_rprib9: row.data[329] ? row.data[329] : "",
            cpr_rprib9: row.data[330] ? row.data[330] : "",
            rplrib9: row.data[331],
            com_rplrib9: row.data[332],
            type_rplrib9: row.data[333] ? row.data[333] : "",
            cpr_rplrib9: row.data[334] ? row.data[334] : "",
            ralrib9: row.data[335],
            com_ralrib9: row.data[336],
            type_ralrib9: row.data[337] ? row.data[337] : "",
            cpr_ralrib9: row.data[338] ? row.data[338] : "",
            rarib9: row.data[339],
            com_rarib9: row.data[340],
            type_rarib9: row.data[341] ? row.data[341] : "",
            cpr_rarib9: row.data[342] ? row.data[342] : "",
            rprib10: row.data[343],
            com_rprib10: row.data[344],
            type_rprib10: row.data[345] ? row.data[345] : "",
            cpr_rprib10: row.data[346] ? row.data[346] : "",
            rplrib10: row.data[347],
            com_rplrib10: row.data[348],
            type_rplrib10: row.data[349] ? row.data[349] : "",
            cpr_rplrib10: row.data[350] ? row.data[350] : "",
            ralrib10: row.data[351],
            com_ralrib10: row.data[352],
            type_ralrib10: row.data[353] ? row.data[353] : "",
            cpr_ralrib10: row.data[354] ? row.data[354] : "",
            rarib10: row.data[355],
            com_rarib10: row.data[356],
            type_rarib10: row.data[357] ? row.data[357] : "",
            cpr_rarib10: row.data[358] ? row.data[358] : "",
            rprib11: row.data[359],
            com_rprib11: row.data[360],
            type_rprib11: row.data[361] ? row.data[361] : "",
            cpr_rprib11: row.data[362] ? row.data[362] : "",
            rplrib11: row.data[363],
            com_rplrib11: row.data[364],
            type_rplrib11: row.data[365] ? row.data[365] : "",
            cpr_rplrib11: row.data[366] ? row.data[366] : "",
            ralrib11: row.data[367],
            com_ralrib11: row.data[368],
            type_ralrib11: row.data[369] ? row.data[369] : "",
            cpr_ralrib11: row.data[370] ? row.data[370] : "",
            rprib12: row.data[371],
            com_rprib12: row.data[372],
            type_rprib12: row.data[373] ? row.data[373] : "",
            cpr_rprib12: row.data[374] ? row.data[374] : "",
            rplrib12: row.data[375],
            com_rplrib12: row.data[376],
            type_rplrib12: row.data[377] ? row.data[377] : "",
            cpr_rplrib12: row.data[378] ? row.data[378] : "",
            ralrib12: row.data[379],
            com_ralrib12: row.data[380],
            type_ralrib12: row.data[381] ? row.data[381] : "",
            cpr_ralrib12: row.data[382] ? row.data[382] : "",
            notes: row.data[383],
          };
          axios.post(API_URL, new_entry).then(() => {
            console.log("posted patient");
          });
        }
      },
      complete: function () {
        console.log("Finished parsing");
      },
    });

    /* const data = new FormData()
    data.append('file', this.state.selectedFile, this.state.selectedFile.name)

    axios
      .post("http://localhost:801/api/patients", data, {
        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
          })
        },
      })
      .then(res => {
        console.log(res.statusText)
      })*/
  };
  render() {
    return (
      <div className="ImportCSV">
        <input
          type="file"
          accept=".csv"
          name=""
          id=""
          onChange={this.handleselectedFile}
        />
        <button onClick={this.handleUpload}>Upload</button>
        <div> {Math.round(this.state.loaded, 2)} %</div>
      </div>
    );
  }
}

export default ImportCSV;
