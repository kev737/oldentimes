class ClassicsController < ApplicationController
  before_action :set_classic, only: [:show, :update, :destroy]

  # GET /classics
  def index
    @classics = Classic.all

    render json: @classics
  end

  # GET /classics/1
  def show
    render json: @classic
  end

  # POST /classics
  def create
    @classic = Classic.new(classic_params)

    if @classic.save
      render json: @classic, status: :created, location: @classic
    else
      render json: @classic.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /classics/1
  def update
    if @classic.update(classic_params)
      render json: @classic
    else
      render json: @classic.errors, status: :unprocessable_entity
    end
  end

  # DELETE /classics/1
  def destroy
    @classic.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_classic
      @classic = Classic.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def classic_params
      params.require(:classic).permit(:phrase, :definition)
    end
end
