class RpsController < ApplicationController
  
  def index
    @shape = shape
  end
  
  
  def new
    # binding pry
    # 以下の形式でデータを返す 今回はjson形式
    respond_to do |format|
      format.json { render json: {shape: shape}, status: 200 }
      logger.debug(shape)
    end
  end


  private
  
  def shape
    # sampleメソッドで3つのうちのどれかを出力
    ["GOO","TYOKI","PAR"].sample
  end

  
end
