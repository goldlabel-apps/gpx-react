import { getFeaturesStore } from "../../../"

export const getBannerByPk = (pkSearch: string) =>  {
  try {
    const state = getFeaturesStore().getState()
    const { banners } = state
    const { bannerList } = banners
    for (let i = 0; i < bannerList.length; i++){
      const { pk } = bannerList[i]
      if (pk === pkSearch){
        return bannerList[i];
      }
    }
    // const { sites } = state;
    // const { sitesList } = sites;
    return false;
  } catch (error: any) {
    console.warn ("getItemByPk", error)
  }
}
