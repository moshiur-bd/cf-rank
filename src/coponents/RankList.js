import Row from "./Row"
import React from 'react'

const BE_HOST = "https://codeforces.com/api"

 class RankList extends React.Component{

     constructor(props) {
         super(props);
         // Don't call this.setState() here!
         this.state = { data: null };
     }

     async actionFetchRanks(){
         var errored = false
         const url = BE_HOST + `/contest.standings?contestId=1541&handles=alshahreyaj;Ramprosad_049;I_Am_Code_Blooded;R.G.D.M.;Bisnu;prodipdatta7;Abdul_Aziz;NaiMiaNaiMiaN;Ramprosad;weak_coder;KhanMahedi;masud458;Shofiqur;refatm452;fuadul;shuvo_14;life_is_over;Sajjat004;PoWeR_LeSs;Arnab048;_ANONYMOUS_;Asfak_Shahrier;Masud-Parvez;masiur_hasan;MAHTAB_TANIM;Himelcse005;Neo070;Suman_Mandol;Hasib_Ullah;Anisur_rahaman;TusharCSE35;AbdurRahman_040;anup_ghosh;Ismail_Hosen;Fahim047;iIBRAHIM;Israt_Jahan_R;LAMIYA_LT;Shanto19;tahsin051;shihabcse038;Redoy50;SSparrow;La_Pagla;Adeeb005;Anik0388;Ashraful_Emon;mehedicse022;Shahajalal22;Remon99;Ashiqi_Shafi;turjokhan535;Mir_Rifat;Sabi006;ziac;20141101046;skmonir;JisanShaikh;jisan047;moshiur.bd;Bisnu_sarkar;.MARAJUL.;Ehsan_sShuvo;farjana23;Srabbi;debashis_roy;Sifat_Sabbir;Girish28;Mosharof57;AbuBokor;nahidulislam926;Only_cse;hasinurmmm;sudipto.bd;BSMRSTU_Lucky_13;tanvir_cse;bsmrstubellal;RubaetRakib;avijit035;Soikat_Faraji;Naimur_Rahman_BSMRSTU;TheCodeKnight;ShaklineHossen;khairul_alom;minhazul.hasan.sohan;khsaikat;Md_Ibrahim_Khan;tahmidhasan.3003;mizan.1400;moinkhan;shajib_2k19;bishworup11;aim_to_miss;Nur_Alam39;iamfif_58;SAGOR_BSMRSTU;sitaula98458;Ashish972;Mezba;Linkon_BSMRSTU;MD_Imran_Hosen1234;Sanjit;Anikcse011;karima22;skrony13;alaminv2;JuwelCSE;net008;taj_uddin;sifat13;Jairul;SamratCSE59;rafikul_islam_murad;msiamn;Fahim_HN;sifatahmed;imran5740;shafayet_hossain;Shovan_Debnath...;Rayhan008;jakiabsmrstucse05;milon_sheikh_bsmrstu;Ratul_08;Bsmrstuanrifat;JamilRayhan;Muhammad_Rabiul_Islam;papiakarmakar785;azizul300;mesbaulbsmrstu;AI_mehedi051;Mushfiq_Rohan;siddikur;Fahim-Montasir-Turza;jafor33;`
         const resp = await fetch(url).
             catch(err => {
                 alert("server down")
                 console.log(err);
                 errored = true
                 return
             });

         if (errored) {
             return
         }

         if (resp.status === 200) {
             this.state.data = (await resp.json()).result
             this.forceUpdate()
         } else {
             const body = await resp.json()
             alert(body.message)
         }
     }
     render(){
        if(this.state.data == null){
            return <div>
                <p>nothing here yet</p>
            </div>
        }

        let cf = this.state.data
        return <div>
            <div className="con-tittle" style={{ "text-align": "center", "margin": "80px" }}>
                {cf.contest.name}
            </div>

            <table>
                <thead>
                    <tr>
                        <th style={{ "text-align": "left", "padding-left": "30px" }}>#</th>
                        <th style={{ "text-align": "left", "padding-left": "30px" }}>CF-Rank</th>
                        <th style={{ "text-align": "left", "padding-left":"30px" }}>Handle</th>
                        <th >Points</th>
                        <th style={{ "text-align": "left", "padding-left": "30px" }}> </th>
                        {cf.problems.map(p => <th>{p.index}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {cf.rows.map((r, i) => <Row key={i} rowID={i + 1} data={r} />) }
                </tbody>
            </table>
        </div>
     }
     componentDidMount() {
         this.actionFetchRanks()
         this.interval = setInterval(() => {this.actionFetchRanks()}, 10000);
     }
     componentWillUnmount() {
         clearInterval(this.interval);
     }
}

export default RankList;

