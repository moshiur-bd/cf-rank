
export const UserDefined = 1;
export const OrgDefined = 2;
export const HideIfFromOrg = 4;

class Flag {
    flag = 0
    Set(flag){
        this.flag = this.flag | flag
    }
    Check(flag){
        return (this.flag & flag) !== 0
    }
}

export default Flag