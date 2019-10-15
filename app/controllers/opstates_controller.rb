class OpstatesController < ApplicationController
  before_action :set_opstate, only: [:show, :edit, :update, :destroy]

  # GET /opstates
  # GET /opstates.json
  def index
    @opstates = Opstate.all
  end

  # GET /opstates/1
  # GET /opstates/1.json
  def show
  end

  # GET /opstates/new
  def new
    @opstate = Opstate.new
  end

  # GET /opstates/1/edit
  def edit
  end

  # POST /opstates
  # POST /opstates.json
  def create
    @opstate = Opstate.new(opstate_params)

    respond_to do |format|
      if @opstate.save
        format.html { redirect_to @opstate, notice: 'Opstate was successfully created.' }
        format.json { render :show, status: :created, location: @opstate }
      else
        format.html { render :new }
        format.json { render json: @opstate.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /opstates/1
  # PATCH/PUT /opstates/1.json
  def update
    respond_to do |format|
      if @opstate.update(opstate_params)
        format.html { redirect_to @opstate, notice: 'Opstate was successfully updated.' }
        format.json { render :show, status: :ok, location: @opstate }
      else
        format.html { render :edit }
        format.json { render json: @opstate.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /opstates/1
  # DELETE /opstates/1.json
  def destroy
    @opstate.destroy
    respond_to do |format|
      format.html { redirect_to opstates_url, notice: 'Opstate was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_opstate
      @opstate = Opstate.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def opstate_params
      params.require(:opstate).permit(:name, :possible_changes)
    end
end
