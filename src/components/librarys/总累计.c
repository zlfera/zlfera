GetTagWord("LLC4ZLJ");//总累计
GetTagByte("ZLFLMCR1");//凉米仓1仓容
GetTagWord("zz_zlf_pre_num");//流量称的初始值


//原粮仓流量称初始值LLC1ZLJ
SetTagWord("zz_zlf_pre_num1",GetTagWord("LLC1ZLJ"));
//间隔时间为5s.
//原粮选择进仓 GetTagChar("YLJCXZ")
//第一步:确定原粮仓号
//第二步:计算对应仓号的累计数量
//开始循环
int yljcxz ;//选择仓号
float llczlj;//总累计
char  zlfylcr[10];//累计变量
float tem_llczlj;//临时变量
float total_num;//总累计
char zz_zlfylcr_num[12];//仓容剩余累计仓号
//GetTagFloat("LLC1ZLJ");
sprintf(zz_zlfylcr_num,"zz_zlfylcr_num%d",yljcxz)
yljcxz = GetTagByte("YLJCXZ");//选择仓号
sprintf(zlfylcr,"ZLFYLCR%d",yljcxz);//确定选择仓号的累计变量
llczlj = GetTagFloat("LLC1ZLJ");//每次间隔5s获取流量称的总累计
tem_llczlj = GetTagFloat(zz_zlf_pre_num);//流量称初始值
SetTagFloat(zz_zlfylcr_num ,llczlj - tem_llczlj + GetTagFloat(zz_zlfylcr_num));//班次累计
